import { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 410, y: 200 }, data: { label: "1" } },
  { id: "2", position: { x: 400, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

const Test = () => {
  return (
    <div className="h-screen w-screen">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
};

export default Test;
