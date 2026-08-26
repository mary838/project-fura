import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 py-16 lg:py-32">
          <p className="text-base font-medium text-brand-primary">404</p>
          <h1 className="text-display-xs font-medium text-title lg:text-display-md">
            This page isn&rsquo;t available yet
          </h1>
          <p className="max-w-[640px] text-base text-subtitle lg:text-xl">
            The page you&rsquo;re looking for hasn&rsquo;t been built yet.
            Head back to the home page or read more about Fura Group.
          </p>
          <div className="flex flex-wrap items-start gap-3">
            <Button href="/">Back to home</Button>
            <Button
              href="/about"
              className="border border-border-secondary bg-transparent text-title hover:bg-surface-muted"
              icon={null}
            >
              About Fura Group
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
