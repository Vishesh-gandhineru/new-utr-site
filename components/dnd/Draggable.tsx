"use client"

import React from 'react';
import {UniqueIdentifier, useDraggable} from '@dnd-kit/core';
import { Button } from 'antd';

type DraggableProps = {
    children: React.ReactNode;
    id: UniqueIdentifier;
    slug: string;
}

export function Draggable({children, id , slug} : DraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: {slug : slug},
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='px-5 py-2 border-[1px] border-primary'>
      {children}
    </button>
  );
}