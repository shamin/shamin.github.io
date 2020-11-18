import React, { useEffect, useState } from "react";

export function DraggableV1(props: { children: React.ReactChild }) {
  const [drag, setDrag] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [clickPos, setClickPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [watchMouse, setWatchMouse] = useState(false);
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element: HTMLDivElement = e.target as HTMLDivElement;
    setClickPos({
      x: e.clientX - element.getBoundingClientRect().left,
      y: e.clientY - element.getBoundingClientRect().top,
    });
    setWatchMouse(true);
  };
  const onMouseUp = () => {
    setWatchMouse(false);
  };
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setDrag({ x: e.clientX - clickPos.x, y: e.clientY - clickPos.y });
    };
    if (watchMouse) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [watchMouse, clickPos]);
  return (
    <div className="draggable">
      <div
        className="draggable__item"
        style={{ position: "absolute", top: drag.y, left: drag.x }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {props.children}
      </div>
    </div>
  );
}
