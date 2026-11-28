import React from 'react'
import TipCard from './TipCard'
import {Code2, Settings, Zap, TriangleAlert, Boxes, SquareTerminal} from 'lucide-react'
import './TipsMain.css'
const tipsData = [

    {
    title: "Start with Basic Patterns",
    description: "Learn the most common regex patterns.",
    icon: Code2,
    pattern: "\\d+",
    sampleText: "My age is 20 and my brother's age is 25",

    rules: [
      {
        symbol: "\\d",
        meaning: "Digits"
      },
      {
        symbol: "\\w",
        meaning: "Word characters"
      },
      {
        symbol: "\\s",
        meaning: "Whitespace"
      },
      {
        symbol: ".",
        meaning: "Any character except newline by default"
      }
    ]
    },

    {
        title: "Use Quantifiers",
        description: "Control how many times a character can repeat.",
        icon: Boxes,
        pattern: "a+",
        sampleText: "apple aa banana aaaa",
        rules: [
        {
            symbol: "*",
            meaning: "Zero or more"
        },
        {
            symbol: "+",
            meaning: "One or more"
        },
        {
            symbol: "?",
            meaning: "Zero or one"
        },
        {
            symbol: "{3}",
            meaning: "Exactly 3 times"
        }
        ]
    }, 

    {
        title: "Understand Regex Flags",
        description: "Use flags for more powerful matching.",
        icon: Settings,
        pattern: "hello",
        sampleText: "Hello hello HELLO HeLLo",
        rules: [
            {
                symbol: "g",
                meaning: "Global search"
            },
            {
                symbol: "i",
                meaning: "Case-insensitive"
            },
            {
                symbol: "m",
                meaning: "Multiline mode"
            },
            {
                symbol: "s",
                meaning: "Dot matches newline"
                
            }
        ]
    },
    {
        title: "Avoid Common Mistakes",
        description: "Be careful with these common errors.",
        icon: TriangleAlert,
        pattern: "[A-Z]+",
        sampleText: "Hello WORLD Regex TEST",
        rules: [
            {
                meaning: "Escape special characters"

            },
            {
                meaning: "Close brackets properly",
            },
            {
                meaning: "Use correct flags",
            },
            {
                meaning: "Avoid empty regex"
            }
        ]
    },
    {
        title: "Test Before Using",
        description: "Always test your regex patterns before using them in production.",
        icon: SquareTerminal,
        pattern: "\\b\\w{4}\\b",
        sampleText: "This is a test with some word patterns",
        rules: [
            {
                meaning: " Try different inputs",
            },
            {
                meaning: "Check edge cases",
            },
            {
                meaning: "Handle errors"
            }
        ]
    },
    {
        title: "keep Patterns Simple",
        description: "A simple regex is easier to read and maintain.",
        icon: Zap,
        pattern: "a+",
        sampleText: "aaa aaaaa aaab a",
        rules: [
            {
                symbol: "a+",
                
            }
        ]
    }

  
];
function TipsMain() {
  return (
    <section className='tips-main'>
        {tipsData.map((tip, index) => {
            return <TipCard key={index} tip={tip} />;
        })}
    </section>
  )
}

export default TipsMain
