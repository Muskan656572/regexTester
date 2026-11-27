import React from 'react';
import './HowItWorks.css';
import {
  Lightbulb,
  Pencil,
  FileText,
  SlidersHorizontal,
  Check,
  ArrowRight
} from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Pencil,
      title: "Enter Regex",
      description: "Type your regex pattern"
    },
    {
      number: 2,
      icon: FileText,
      title: "Add Test Text",
      description: "Paste or type your text"
    },
    {
      number: 3,
      icon: SlidersHorizontal,
      title: "Select Flags",
      description: "Choose required flags"
    },
    {
      number: 4,
      icon: Check,
      title: "View Results",
      description: "See matches and errors"
    }
  ];

  return (
    <section className="how-it-works">

      {/* Heading */}
      <div className="how-heading">
        <div className="how-title">
          <Lightbulb size={32} className="bulb-icon" />
          <h2>
            How It <span>Works</span>
          </h2>
        </div>

        <span className="how-badge">
          Get started in just 4 simple steps
        </span>
      </div>

      {/* Steps */}
      <div className="steps-container">

        {steps.map((step, index) => {
          const StepIcon = step.icon;

          return (
            <>

              <div className="step-card">

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  <StepIcon size={21} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

              {index !== steps.length - 1 && (
                <ArrowRight
                  size={23}
                  className="step-arrow"
                />
              )}

            </>
          );
        })}

      </div>

    </section>
  );
}

export default HowItWorks;
