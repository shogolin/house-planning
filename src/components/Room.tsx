import { Room as RoomType } from '../types';
import { mmToPx } from '../utils/calculations';

interface RoomProps {
  room: RoomType;
}

/**
 * 部屋をSVG矩形として描画するコンポーネント
 */
export function Room({ room }: RoomProps) {
  const x = mmToPx(room.x);
  const y = mmToPx(room.y);
  const width = mmToPx(room.width);
  const height = mmToPx(room.height);
  
  return (
    <g>
      {/* 部屋の矩形 */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={room.color}
        stroke="#333"
        strokeWidth={1}
      />
      {/* 部屋名のラベル */}
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={14}
        fill="#333"
        fontWeight="bold"
      >
        {room.name}
      </text>
    </g>
  );
}

