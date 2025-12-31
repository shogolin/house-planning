import { Plan } from '../types';

interface PlanSelectorProps {
  plans: Plan[];
  selectedPlanId: string;
  onPlanChange: (planId: string) => void;
}

/**
 * プランを切り替えるセレクターコンポーネント
 */
export function PlanSelector({
  plans,
  selectedPlanId,
  onPlanChange
}: PlanSelectorProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label htmlFor="plan-select" style={{ marginRight: '8px', fontWeight: 'bold' }}>
        プラン選択:
      </label>
      <select
        id="plan-select"
        value={selectedPlanId}
        onChange={(e) => onPlanChange(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        {plans.map(plan => (
          <option key={plan.id} value={plan.id}>
            {plan.name}
          </option>
        ))}
      </select>
    </div>
  );
}

