import { useState, useContext } from "react";
import { useTree } from "../hooks/useTree";
import { AuthContext } from "../context/AuthContext";

function FileSystemPage() {
  const { tree, addNode } = useTree();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [type, setType] = useState<"folder" | "file">("folder");
  const [parentId, setParentId] = useState<number | null>(null);

  const getFolderOptions = (node: any, list: any[] = []) => {
    if (!node) return list;
    if (node.value.type === "folder") {
      list.push(node.value);
    }
    node.children.forEach((child: any) => getFolderOptions(child, list));
    return list;
  };

  const folderOptions = getFolderOptions(tree.root);

  const createNode = async () => {
    if (!user) {
      alert("Debes iniciar sesión");
      return;
    }

    if (!name.trim()) {
      alert("Ingrese un nombre");
      return;
    }

    if (tree.root && parentId === null) {
      alert("Selecciona una carpeta padre");
      return;
    }

    await addNode(parentId, {
      id: Date.now(),
      name: name.trim(),
      type,
      user
    });

    setName("");
  };

  const renderTree = (node: any) => {
    if (!node) return null;

    return (
      <div className="tree-node">
        <p>
          {node.value.type === "folder" ? "📂‣" : "📜‣"} {node.value.name} -{" "}
          {node.value.user}
        </p>
        {node.children.map((child: any) => renderTree(child))}
      </div>
    );
  };

  return (
    <div className="filesystem-page">
      <h1>Sistema de Archivos</h1>
      <h3>Usuario: {user}</h3>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value as any)}>
        <option value="folder">Carpeta</option>
        <option value="file">Archivo</option>
      </select>

      <select
        value={parentId ?? ""}
        onChange={(e) =>
          setParentId(e.target.value ? Number(e.target.value) : null)
        }
      >
        <option value="">{
          tree.root ? "Selecciona carpeta padre" : "Crear en raíz"
        }</option>
        {folderOptions.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.name}
          </option>
        ))}
      </select>

      <button onClick={createNode}>Crear</button>

      <h2>Estructura</h2>
      <div className="tree-view">{renderTree(tree.root)}</div>
    </div>
  );
}

export default FileSystemPage;