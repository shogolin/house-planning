import { mmToPx } from '../utils/calculations';

interface GridProps {
  width: number;  // mm
  height: number; // mm
  gridSize?: number; // mm (デフォルト: 910mm = 半間)
}

/**
 * グリッド背景を描画するコンポーネント
 * 910mm（半間）または455mmごとのグリッド線を表示
 */
export function Grid({ width, height, gridSize = 910 }: GridProps) {
  const widthPx = mmToPx(width);
  const heightPx = mmToPx(height);
  
  // グリッド線の本数を計算
  const verticalLines = Math.ceil(width / gridSize);
  const horizontalLines = Math.ceil(height / gridSize);
  
  const lines = [];
  
  // 縦線を生成
  for (let i = 0; i <= verticalLines; i++) {
    const x = mmToPx(i * gridSize);
    lines.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1={0}
        x2={x}
        y2={heightPx}
        stroke="#E0E0E0"
        strokeWidth={0.5}
      />
    );
  }
  
  // 横線を生成
  for (let i = 0; i <= horizontalLines; i++) {
    const y = mmToPx(i * gridSize);
    lines.push(
      <line
        key={`h-${i}`}
        x1={0}
        y1={y}
        x2={widthPx}
        y2={y}
        stroke="#E0E0E0"
        strokeWidth={0.5}
      />
    );
  }
  
  return <g>{lines}</g>;
}

