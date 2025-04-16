import SectionWrapper from './components/SectionWrapper';
import AlertCard from './components/AlertCard';
import AlertDrop from './components/AlertDrop';
import SimbianSteps from './components/SimbianSteps';
import SuccessCard from './components/SuccessCard';

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Section 1: Without Simbian */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-red-800">Without Simbian</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <AlertCard title="Ignored Alerts" icon="/icons/alert.svg" count={200} color="red" />
            <AlertDrop />
          </div>
          <div>
            <AlertCard title="Wrongly Closed Alerts" icon="/icons/close.svg" count={35} color="yellow" />
            <AlertDrop />
          </div>
          <div>
            <AlertCard title="Active Threats" icon="/icons/threat.svg" count={5} color="orange" />
            <AlertDrop />
          </div>
        </div>
      </SectionWrapper>
      {/* Section 2: With Simbian */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-800">With Simbian</h2>
        <SimbianSteps />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <SuccessCard title="Ignored Alerts" icon="/icons/alert.svg" /> 
          <SuccessCard title="Wrongly Closed Alerts" icon="/icons/close.svg" />
          <SuccessCard title="Active Threats" icon="/icons/threat.svg" />
        </div>
      </SectionWrapper>
    </main>
  );
}
