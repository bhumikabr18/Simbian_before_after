export default function SectionWrapper({ children }: { children: React.ReactNode }) {
    return (
      <section className="px-4 py-10 md:px-20 w-full">
        {children}
      </section>
    );
  }
  