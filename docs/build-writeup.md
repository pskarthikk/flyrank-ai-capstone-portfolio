# Build write-up

## What I built

A small AI/ML portfolio that makes one claim: I can take practical AI/ML problems, work through them with AI assistance, and turn the result into evidence someone can inspect.

## Stack decision

I used plain HTML, CSS and JavaScript. The site does not need a framework, bundler, server, database or API for its core job. Keeping it static makes it fast, easy to understand, and straightforward to publish with GitHub Pages.

## The real proof

The featured case is my FlyRank ML Internship work on **Refresh / Content Opportunity Scoring**. In the starter experiment, Random Forest reached Precision@50 of 0.740 compared with 0.240 for the hand-written rule. The case links back to the existing project and research paper.

## The working feature

The Content Review Priority Playground recalculates a transparent priority score in the browser as the user changes traffic trend, click trend, rank change and content age.

It is explicitly labelled as a demonstration of decision logic. It is **not** presented as the trained Random Forest model. That distinction matters because the portfolio should never claim that a browser demo is the production model when it is not.

## What broke / what I learned

The first concept for the interactive feature could easily have been mistaken for the actual trained model. That was a communication problem, even though the code worked. I fixed it by making the boundary explicit in the UI and documentation.

The broader lesson was that AI makes implementation fast, but it also makes it easy to move faster than verification. I still need to check metrics, links, behaviour and claims myself.

## What I would build next

The next case is the **FlyRank ML Internship Capstone — Content Opportunity Scoring**. It will use the same three beats:

1. Problem
2. What I did
3. What came of it

The case should include the final research narrative, model comparison, one useful metric, links to the work, and one honest limitation.

## AI's role

AI was used as a development partner for planning, implementation, explanation, iteration and writing. Human judgement remained responsible for choosing what to claim and checking the evidence.
