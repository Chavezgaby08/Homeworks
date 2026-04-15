import { createContext, useState, useEffect } from "react";
import { Tree, TreeNode, type NodeData } from "../structures/Tree";
import { db } from "../firebase/config";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export const TreeContext = createContext<any>(null);

export const TreeProvider = ({ children }: any) => {
  const [tree, setTree] = useState(new Tree());

  const addNode = async (parentId: number | null, data: NodeData) => {
    const newNode = new TreeNode(data);
    const newTree = new Tree();
    Object.assign(newTree, tree);

    if (!newTree.root) {
      newTree.setRoot(newNode);
    } else {
      if (parentId === null) {
        throw new Error("Debes seleccionar una carpeta padre");
      }
      const parent = newTree.findNode(parentId);
      parent?.addChild(newNode);
    }

    await setDoc(doc(db, "nodes", data.id.toString()), {
      ...data,
      parentId
    });

    setTree(newTree);
  };

  useEffect(() => {
    const loadTree = async () => {
      const querySnapshot = await getDocs(collection(db, "nodes"));
      const nodes: any[] = [];
      querySnapshot.forEach((doc) => nodes.push(doc.data()));

      const nodeMap: Record<number, TreeNode> = {};
      const newTree = new Tree();

      nodes.forEach((n) => {
        nodeMap[n.id] = new TreeNode(n);
      });

      nodes.forEach((n) => {
        if (n.parentId != null) {
          nodeMap[n.parentId]?.addChild(nodeMap[n.id]);
        } else {
          newTree.setRoot(nodeMap[n.id]);
        }
      });

      setTree(newTree);
    };

    loadTree();
  }, []);

  return (
    <TreeContext.Provider value={{ tree, addNode }}>
      {children}
    </TreeContext.Provider>
  );
};