import { useState } from 'react';
import { plans, getPlanById } from './data/plans';
import { PlanSelector } from './components/PlanSelector';
import { FloorPlan } from './components/FloorPlan';
import { PlanInfo } from './components/PlanInfo';
import './styles.css';

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(plans[0].id);
  
  const selectedPlan = getPlanById(selectedPlanId);
  
  if (!selectedPlan) {
    return <div>プランが見つかりません</div>;
  }
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>2D間取りシミュレーター</h1>
        <PlanSelector
          plans={plans}
          selectedPlanId={selectedPlanId}
          onPlanChange={setSelectedPlanId}
        />
      </header>
      
      <main className="app-main">
        <div className="floor-plan-container">
          <FloorPlan plan={selectedPlan} />
        </div>
        
        <div className="plan-info-container">
          <PlanInfo rooms={selectedPlan.rooms} planName={selectedPlan.name} />
        </div>
      </main>
    </div>
  );
}

export default App;

