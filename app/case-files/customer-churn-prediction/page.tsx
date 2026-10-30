import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpen, Database, Lightbulb, Target } from "lucide-react";
import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import CaseStudyHeader from "@/components/features/case-files/CaseStudyHeader";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { actionStyles } from "@/lib/action-styles";
import { pageMetadata } from "@/lib/metadata";

const assignmentPdf = "/documents/gci-world-april-2026-customer-churn-assignment.pdf";

const sectionHeading = "mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground";

export const metadata = pageMetadata(
  "Customer Churn Prediction & Retention Strategy",
  "I analyzed telecommunications customer data, evaluated a Random Forest model, and proposed customer retention strategies based on the findings.",
  "/case-files/customer-churn-prediction"
);

export default function CustomerChurnPredictionCaseFile() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex-1 overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background">
      <div className="page-shell case-study-shell">
        <CaseStudyHeader
          id="customer-churn-prediction"
          title="Customer Churn Prediction & Retention Strategy"
          description="I analyzed customer churn data and used the findings to propose retention strategies for Company A Telecommunications."
        />

        <CaseStudyContext
          id="customer-churn-prediction"
          sections={[
            { id: "overview", label: "Project overview" },
            { id: "business-problem", label: "Business problem" },
            { id: "dataset", label: "Dataset & analysis" },
            { id: "modeling", label: "Modeling & evaluation" },
            { id: "findings", label: "Analytical findings" },
            { id: "recommendations", label: "Recommendations" },
            { id: "learning", label: "Learning outcomes" },
          ]}
        />

        <div className="space-y-12 sm:space-y-14">
          <RevealOnScroll>
            <section id="overview" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Project Overview
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I completed this project as my GCI World April 2026 final assignment, organized by the Matsuo-Iwasawa Laboratory at The University of Tokyo. I used data analysis and Machine Learning to study telecommunications customer churn, then turned the findings into proposed customer retention strategies. The assignment was part of the program&apos;s requirements for its Certificate of Completion.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={assignmentPdf} target="_blank" rel="noreferrer" className={actionStyles({ variant: "primary" })}>
                  View Final Assignment (PDF)<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <Link href="/credentials" className={actionStyles({ variant: "quiet" })}>
                  View related certificate
                </Link>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="business-problem" aria-labelledby="business-problem-heading">
              <h2 id="business-problem-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <Target className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Business Problem
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                When customers leave, a telecommunications business loses recurring revenue and needs to find replacements. I focused on which customer behaviors and characteristics were associated with churn so the business could identify possible retention opportunities earlier and focus proposed outreach on customers who may be at risk.
              </p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="dataset" aria-labelledby="dataset-heading">
              <h2 id="dataset-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <Database className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Dataset &amp; Exploratory Analysis
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                I used a telecommunications course dataset with 100,000 customer records and 100 reported features. Customer churn was the target variable. This was a course dataset, not a live commercial client database or data I collected myself.
              </p>
              <ul className="grid gap-4 border border-border/40 bg-card p-6 text-sm leading-relaxed text-foreground sm:grid-cols-2 sm:p-8">
                <li>I checked data quality and handled missing values.</li>
                <li>I encoded categorical data for Machine Learning.</li>
                <li>I analyzed customer behavior and usage patterns.</li>
                <li>I used visualizations to compare customers who churned with those who stayed.</li>
              </ul>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="modeling" aria-labelledby="modeling-heading">
              <h2 id="modeling-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <BarChart3 className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Modeling &amp; Evaluation
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I evaluated a Random Forest classifier after handling missing values, applying one-hot encoding, and splitting the data into training and test sets. The submitted assignment reported 63.0% accuracy, 62.9% precision, 63.3% recall, 63.1% F1 score, and 68.1% ROC-AUC. I did not independently reproduce or production-validate these results.
              </p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="findings" aria-labelledby="findings-heading">
              <h2 id="findings-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <Lightbulb className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Analytical Findings
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                In my analysis, equipment age, changes in customer usage, and customer tenure stood out as predictors or factors associated with churn. These results show associations in the assignment data; they do not prove that these factors cause churn.
              </p>
              <dl className="grid gap-5 sm:grid-cols-3">
                <div className="border-l-2 border-foreground/30 pl-5">
                  <dt className="mb-2 text-sm font-medium text-foreground">Equipment age</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">Customers with older devices were more likely to churn in the dataset.</dd>
                </div>
                <div className="border-l-2 border-foreground/30 pl-5">
                  <dt className="mb-2 text-sm font-medium text-foreground">Usage changes</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">Large changes in usage were associated with churn risk.</dd>
                </div>
                <div className="border-l-2 border-foreground/30 pl-5">
                  <dt className="mb-2 text-sm font-medium text-foreground">Customer tenure</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">The length of the customer relationship was associated with retention behavior.</dd>
                </div>
              </dl>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="recommendations" aria-labelledby="recommendations-heading">
              <h2 id="recommendations-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <Target className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Business Recommendations
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Based on my findings, I proposed device-upgrade offers for customers with older devices, usage-recovery campaigns for customers with declining usage, and loyalty rewards for long-term customers. These ideas came from the educational assignment and were not deployed interventions.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The report estimated that 2,478 customers could potentially be retained under an assumed 5% reduction in churn. This was an illustrative scenario, not an achieved business result.
              </p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="learning" aria-labelledby="learning-heading">
              <h2 id="learning-heading" className={`scroll-mt-24 ${sectionHeading}`}>
                <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Learning Outcomes
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This assignment gave me more practice with Data Cleaning, Exploratory Data Analysis, classification, model evaluation, and explaining analytical findings to a non-technical audience. I also learned how to connect model results to practical business recommendations without presenting assumptions as actual outcomes.
              </p>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}
