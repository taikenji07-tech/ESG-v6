
export type Translation = Record<string, string>;

export type Translations = {
  en: Translation;
  ms: Translation;
};

export const translations: Translations = {
  en: {
    // Header
    learning_progress: "Learning Progress",
    points: "points",
    
    // Progress Bar
    progress_bar_slaying_it: "You're slaying it 🔥",
    progress_bar_almost_there: "Almost there, legend 🏁",

    // Avatar Selection
    avatar_select_title: "Pick a cute avatar!",
    avatar_select_subtitle: "Choose a friendly face to be you in our chat! ✨",
    
    // Onboarding Form
    onboarding_title: "Just a few details!",
    onboarding_subtitle: "We need this for your certificate of completion. ✨",
    label_name: "What should I call you?",
    placeholder_name: "e.g. Alex",
    label_fullname: "Full Name (for certificate)",
    placeholder_fullname: "e.g. Alex Smith",
    label_email: "Email Address",
    placeholder_email: "e.g. alex@university.edu",
    label_phone: "Phone Number",
    placeholder_phone: "e.g. 012-3456789",
    label_university: "University Name",
    placeholder_university: "Select your university",
    university_other: "Others",
    label_other_university: "Please specify your university",
    placeholder_other_university: "e.g. My Awesome University",
    btn_lets_go: "Let's Go! 🚀",
    btn_submitting: "Submitting...",
    error_required: "This field is required.",

    // Badges
    badge_big_brain_name: "📘 Big Brain Mode!",
    badge_big_brain_tooltip: "Look at that progress! Your brain is huge.",
    badge_ate_quiz_name: "🎯 You Ate That Quiz 🔥",
    badge_ate_quiz_tooltip: "Slayed the quiz. No crumbs left.",
    badge_certified_legend_name: "🏆 Certified Legend ✨",
    badge_certified_legend_tooltip: "OMG! Look at you, full marks?! Who’s the genius now 😎",

    // Toasts
    toast_q8_skipped: "Oops! You skipped the final boss question 😅 — no flawless victory this time!",
    toast_copied: "Copied to clipboard!",

    // Celebration Modal
    celebration_title: "Congratulations!",
    celebration_subtitle: "You've completed your ESG learning journey!",
    celebration_final_score: "Your Final Score",
    btn_close: "Close",

    // Decision Tree Nodes
    greeting_text: "Awesome, thanks for all the info, **{userName}**! We're all set. Let's dive in and learn some amazing things together. First up... what even **is** ESG?",
    what_is_esg_answer_text:
      "ESG = **Environmental, Social & Governance.**\n\nIt’s a framework for how we care for the planet 🌍, people 🤝, and systems 🏛️.",
    esg_breakdown_hub_text: "Great choice! This is the core of ESG. Pick a pillar to explore, or continue when you're ready.",
    esg_breakdown_hub_revisit_text: "You got it! What else should we explore here?",
    esg_breakdown_e_text: "🌿 **Environmental**\n\nThis is all about how a company impacts the planet.\n\n- Reducing carbon emissions\n- Conserving energy and water\n- Managing waste responsibly\n- Protecting biodiversity\n\nThink: How is this company fighting climate change or protecting natural resources?",
    esg_breakdown_s_text: "🤝 **Social**\n\nThis focuses on how companies treat people—both inside and outside their organisation.\n\n- Employee well-being and diversity\n- Community engagement\n- Human rights in supply chains\n- Product safety and ethical marketing\n\nThink: Would you be proud to work here or buy from them, knowing how they treat people?",
    esg_breakdown_g_text: "✅ **Governance**\n\nThis is about ethical leadership and decision-making.\n\n- Transparent financial reporting\n- Fair executive pay\n- Anti-corruption policies\n- Diversity in leadership\n\nThink: Are the people in charge accountable, fair, and acting in everyone’s best interest?",
    main_loop_text: "What else about ESG can I know?",
    main_loop_revisit_text: "Great! What's next on our adventure, {userName}? 🗺️",
    why_important_answer_text:
      "**ESG Is All Around You**\n\n- Clean air = Breathe better\n- Inclusive schools = Fair chances for all\n- Strong governance = Your data stays safe\n\nIt’s not just about climate – It’s about fairness, safety, and YOUR future ✨.",
    more_importance_esg_text:
      "Let's explore that. What are you curious about?",
    more_importance_esg_revisit_text: "Anything else on this topic?",
    more_importance_esg_revisit_text_matter_as_student: "That was insightful! How about we now explore **why this matters to you as a student**?",
    more_importance_esg_revisit_text_personal_esg: "That was insightful! How about we now explore if **there is such a thing as ESG for individuals**?",
    all_subtopics_done_prompt: "We've covered some great points here. Let's head back to the main topics to continue our exploration!",

    matter_as_student_answer_text:
      "**The Big Picture: The Future You're Building**\n\n- **E** = Clear skies, clean water, stable climate 🌡️ (No more dorm floods!)\n- **S** = Fair chances for everyone – on campus & at work 💼\n- **G** = Apps & companies that respect your privacy 🔒\n\nThis is the world you're shaping – one choice at a time. 🎯",
    
    personal_esg_intro_text: "You already know ESG means Environmental, Social, and Governance — a framework for making responsible choices that protect the planet, people, and ethical values.\n\nBut here’s the twist most students don’t think about: ESG isn’t just about how companies behave. It can also be a personal life practice. And yes — that even includes something as “grown-up” as insurance.",
    personal_esg_tool_explanation_text: "ESG for individuals means making choices today that protect you, your community, and your future self.\n\n**Environmental** 🌱 – How do your habits and purchases affect the planet?\n**Social** 🤝 – How do you support the well-being of others?\n**Governance** 📊 – How do you manage your resources, risks, and responsibilities?\n\nThat last one—Governance—is where insurance comes in. It’s your personal risk shield, helping you keep contributing to environmental and social good without life’s curveballs knocking you off track.\nJust like companies future-proof with ESG policies, you can future-proof your life through responsible planning.",
    personal_esg_pillars_hub_text: "Imagine you’re 26, just starting your career and living your ESG values—taking public transport, buying ethical brands, volunteering.\n\nThen a medical emergency hits.\n\n- **Without insurance:** savings wiped out, parents step in, independence set back.\n- **With insurance:** you recover and stay on track with your goals—without compromising your values.\n\nDo you want to see how this connects to ESG? Choose a pillar to explore.",
    personal_esg_pillars_hub_revisit_text: "Great insight. Which other pillar should we explore?",
    personal_esg_pillar_e_answer_text: "Ethical insurers invest with purpose—funding renewable energy, green bonds, and ethical companies instead of high-pollution industries.\n\nBy choosing ESG conscious companies, your premiums don’t just protect you—they also help drive environmental and social progress.",
    personal_esg_pillar_s_answer_text: "If something happens, insurance eases the financial burden on your family.\n\nSome of our policies even channel part of your premiums into community health programs, disaster relief, and charitable causes—turning your personal safety net into a force for social good.",
    personal_esg_pillar_g_answer_text: "Just like companies manage risk to stay sustainable, you can manage your own.\n\nInsurance—whether health, life, or critical illness—protects you from one unexpected event wiping out your finances.\n\nThat security means you can keep making a positive impact, live your ESG values, and focus on your goals instead of slipping into survival mode.",

    what_can_i_do_answer_text:
      "ESG IRL: How to Actually Live It 🌱\n\n💡 It’s not about perfection — just small, consistent swaps.\n\n**1️⃣ Learn in Snack-Sized Ways 📚**\n- Watch a quick 10-min YouTube on climate or ethical business instead of doomscrolling.\n- Follow 3 ESG or sustainability creators on TikTok/IG so your feed feeds you.\n- Listen to a sustainability podcast while commuting, walking, or doing chores.\n\n**2️⃣ Be Brand-Curious 🌏**\n- Check if your snack packaging is recyclable or ethically sourced.\n- Look up your fave brand’s sustainability page — see if they’re walking the talk.\n- Compare coffee shops: who’s fair-trade or supports local farmers?\n\n**3️⃣ Build Skills Through Involvement 💡**\n- Volunteer at one green or community event each semester.\n- Add a sustainability angle to group projects (digital-only, carbon tracking).\n- Help your club go eco — reusable cups, ride-pooling, less waste.\n\n**4️⃣ Shop & Eat with Impact 🛒**\n- Swap clothes with friends or thrift instead of buying new.\n- Bring your own water bottle or coffee cup — discounts are a bonus.\n- Try one meatless meal a day to cut your carbon footprint.\n\n**5️⃣ Blend ESG into Studies 🎓**\n- Choose essay topics that explore ESG in your field.\n- Suggest green field trips (eco-buildings, social enterprises).\n- Cite sources properly in your work.",
    what_else_student_prompt_text:
      "Give me an example of another small ESG-friendly action you could take on campus.",
    what_else_student_failed_text: "No worries! Sometimes it's tricky to come up with ideas on the spot. Here are a few examples of great ESG-friendly actions on campus:\n\n- **Organizing a clothing swap** with friends to promote circular fashion (Social & Environmental).\n- **Starting a petition** for more water refill stations to reduce plastic bottle waste (Environmental & Governance).\n- **Volunteering to help** a campus club manage its finances transparently (Governance).\n\nEven small ideas can make a big difference!",
    
    relevance_intro_text: "Here are a few areas where a solid understanding of ESG is super beneficial to your future of adulting:",
    relevance_hub_text: "Which area are you curious about first?",
    relevance_hub_revisit_text: "Great info. What else is on your list?",
    relevance_career_answer_text: "**Your career choices:**\n\nESG isn’t just a “bonus skill” anymore—it’s a hiring must. Big names like Google, Tesla, and Unilever want grads who think long-term, not just quick profits.\n\nKnow ESG, and you stand out—whether pitching a green idea, running ethical supply chains, or making workplaces more inclusive. Many grad programs now have sustainability tracks that can fast-track you into leadership.\n\n**Why it matters?**\nMany top employers now expect future hires to understand ESG. It’s becoming a core skill across industries.",
    relevance_consumer_answer_text: "**Your power as a consumer:**\n\nEvery purchase = a vote for the world you want.\nSupport brands that treat people right and go eco-friendly. Social media can flip the script fast—boycotts and viral posts have forced big brands to clean up their act.\n\n**Example:** In 2023, Shein flew influencers to a staged factory so they’d post “happy workers…” It backfired hardcore—social media instantly called it propaganda.\n\n**Why it matters?**\nYour buying habits influence which companies thrive.",
    relevance_community_answer_text: "**Your Planet and Community:**\n\nClimate change, inequality, and bad governance aren’t “future problems”—they’re shaping your world right now.\nBy 2050, you’ll be the leaders solving today’s mess.\n\nESG helps you fight for clean air, fair jobs, and ethical leadership—and hold companies accountable for what they do to your community.\n\n**Why it matters?**\nYou’re inheriting the results of today’s corporate decisions.",

    career_opportunities_answer_text:
      "**ESG Skills = Your Career Superpower!** 🦸\n\n**Hot New Jobs** 🔥\n- Sustainability Consultant\n- ESG Data Analyst\n- Climate Risk Specialist\n- Diversity & Inclusion Manager\n\n**Boost Any Job** ✨\n- Accountant? Audit carbon footprints.\n- Marketer? Spot greenwashing & promote real impact.\n- Actuary? Model climate & social risks.",
    career_next_steps_text: "How would you like to proceed?",
    how_to_learn_answer_text:
      "**Start Your ESG Journey NOW:**\n- Take a free ESG course online (so many out there!) 💻\n- Join a campus sustainability club 🌱\n- Follow ESG leaders & topics on LinkedIn 🔗",
    degree_major_prompt_text:
      "I can help with that. What is your degree major?",
    ask_more_major_prompt_text: "Of course! What else is on your mind regarding your major and ESG?",
    do_i_matter_answer_text:
      "It’s easy to think, “I’m just one student—what difference can I make?”\n But big change starts with millions of small choices made by people like you.\n\n**1️⃣ Small Habits, Big Impact**\nBring a reusable cup daily for a semester = 100 cups saved. If 100 students do it, that’s 10,000 cups.\nChoosing thrift over fast fashion cuts waste, water use, and emissions.\n\n**2️⃣ Your Choices Shift the Market**\nGen Z’s demand for ethical brands is pushing giants like Adidas and Nestlé to rethink supply chains.\nEvery ringgit spent says, “I value this”—and companies listen when enough people agree.\n\n**3️⃣ You Influence Your Circle**\nFriends copy habits—water bottles, thrifting, food choices. When you make a conscious choice, it normalizes it and inspires others to do the same.\n\n**4️⃣ You’re the Future Workforce**\nCompanies hire people who share their values. Understanding ESG makes you a more attractive candidate because you show you think about the bigger picture.\n\n**The message?**\nYou’re not a drop in the ocean. You’re part of the wave. 🌊",
    digital_habits_answer_text:
      "Even our digital habits have a carbon footprint, from streaming videos to sending emails. Being mindful of our energy consumption is a great first step. Check out this video to learn more!",
    
    anything_else_hub_text: "These are some key insights that can really level up your ESG understanding. Which one sparks your interest?",
    anything_else_hub_revisit_text: "Awesome! What other key insight should we dive into?",
    anything_else_not_just_environmental_text: "**ESG Is Not Just “Environmental”**\n\nESG = Environment 🌍 + Social 🤝 + Governance 🏛️.\nIt’s not just about climate change or recycling—it’s also workers’ rights, diversity, fair pay, anti-corruption, and ethical leadership. A brand can be “green” and still fail ESG if it exploits workers or hides misconduct.\n\n**Example:** In 2024, Boohoo faced criticism for low factory wages in Leicester despite promoting its “sustainable” clothing lines. Green marketing couldn’t hide social failings.",
    anything_else_measurable_text: "**ESG is Measurable and Transparent**\n\nESG isn’t fluff—there are real scores and data. Check companies on Sustainalytics, MSCI ESG Ratings, or apps like Good On You for fashion. This makes it way harder for brands to greenwash.\n\n**Example:** In 2023, H&M’s “Conscious Collection” scored poorly on Good On You for lack of transparency in supply chains, sparking online debates and calls for improvement.",
    anything_else_career_currency_text: "**ESG Skills are Career Currency**\n\nFrom finance and tech to design, healthcare, and engineering, ESG is becoming a must-have skill. It’s in job ads, performance reviews, and leadership programs. Learn it now and you’re ahead before you even graduate.\n\n**Example:** Microsoft now includes sustainability goals in leadership performance reviews—employees with ESG expertise have a clear edge in promotions.",
    anything_else_long_term_text: "**ESG for Long Term Game**\n\nIgnoring ESG can mean scandals, lawsuits, or a slow collapse—future-proofing matters for companies and your own career. Students who think ESG now build sustainable paths that last decades.\n\n**Example:** Volkswagen’s diesel emissions scandal wiped out billions in value, damaged trust, and is still a cautionary tale for ignoring governance and environmental standards.",
    anything_else_small_move_text: "**Small Move for ESG**\n\nNo one’s perfect from day one. Start with small, consistent actions—cut waste, support ethical brands, speak up on issues. ESG is a journey, and even imperfect moves make a difference.\n\n**Example:** Student-led campaigns like Klima Action Malaysia started with small climate strikes in KL and grew into a national voice influencing environmental policy.",
    
    learning_complete_prompt_quiz_text:
      "Wow, **{userName}**, you've soaked up so much knowledge! 🧠 You've completed the core learning section.\n\nNow it's time to put your skills to the test with a short quiz. Or, if there's anything else you're curious about, feel free to ask me now.",
    ask_more_esg_prompt_text:
      "Absolutely. What's on your mind? I'm here to help clear up any final questions you have about ESG before the quiz.",
    
    final_thanks_no_quiz_text:
      "No problem at all, **{userName}**! The most important thing is learning. You've done an amazing job exploring the world of ESG with me. Your final score, based on your learning progress, is **{score}**!\n\n**AI Impact Note:** Just by chatting, we've used a tiny bit of energy, creating about **{co2}g of CO2** – that's like running an AC for {acMinutes} minutes or a car driving {carKm} km. {aiReminder} Thanks for learning with me!",
    quiz_q1_text_dd: "Let's start with the basics! Drag and drop the correct letter to its corresponding ESG pillar.",
    quiz_q1_correct_text: "Spot on! E for Environmental, S for Social, and G for Governance. You've got the foundations down. ✅",
    quiz_q1_incorrect_text: "Not quite! Remember: E is for Environmental (planet), S is for Social (people), and G is for Governance (systems). Let's keep going!",

    quiz_q2_text: "Which of these is **NOT** a typical career in the ESG field?",
    quiz_q2_correct_text: "Correct! While a 'Fossil Fuel Lobbyist' is a career, it generally works against ESG goals, not for them. You're sharp!  sharp! 🧠",
    quiz_q2_incorrect_text: "Hmm, that's a valid ESG-related career. The one that doesn't quite fit is 'Fossil Fuel Lobbyist' as it often opposes ESG principles.",
    
    quiz_q3_text: "What’s a simple digital habit that reduces your environmental impact?",
    quiz_q3_correct_text: "Exactly! Streaming in Standard Definition (SD) uses significantly less data and energy than HD or 4K. Small change, big impact! 💡",
    quiz_q3_incorrect_text: "Good thought, but that's not the most impactful. Streaming in SD instead of HD is a great way to reduce energy consumption from data centers.",
    
    quiz_q4_text: "Which of these is an example of good **Governance** in your everyday life?",
    quiz_q4_correct_text: "Perfect! Citing your sources is all about academic integrity, transparency, and accountability—key governance principles. Well done! 🏆",
    quiz_q4_incorrect_text: "That's more related to the Environmental or Social pillars. Good Governance is about accountability and ethical systems, like citing sources properly in your assignments.",

    quiz_q5_text: "What is the 'ripple effect' in the context of personal ESG choices?",
    quiz_q5_correct_text: "You got it! Your choices influence your friends, family, and even the market, creating a wave of positive change. 🌊",
    quiz_q5_incorrect_text: "Not quite. The ripple effect is how your small, positive actions can inspire and influence others, leading to a much larger collective impact.",

    quiz_q6_prompt_text: "Time for a deeper question. How much do you matter in saving our Earth? (There's no wrong answer, just your thoughts!)",

    quiz_q7_prompt_text: "Last one before the final challenge! What is one action you will take to improve your ESG impact?",

    quiz_q8_text: "Final challenge! Find the 7 ESG-related words hidden in the grid. This is a test of focus and knowledge. Good luck! ✨",
    
    quiz_end_text:
      "And that's a wrap! You've officially completed the ESG Student Guide Quiz. Fantastic effort!\n\nYour final score is **{score}** out of 1000, with **{quizCorrectAnswers}** correct answers.\n\n**AI Impact Note:** Just by chatting, we've used a tiny bit of energy, creating about **{co2}g of CO2** – that's like running an AC for {acMinutes} minutes or a car driving {carKm} km. {aiReminder} Thanks for learning with me!",
    
    certificate_sent_text: "All done! Your certificate of completion has been sent to your registered email address. What would you like to do next?",
    
    share_prompt_text: "Here's a ready-to-share post for your LinkedIn. Let the world know about your awesome achievement!",
    linkedin_share_text: "I've just completed the ESG Student Guide by RHB Insurance and scored {score} points! 🌿\n\nThis interactive chatbot was a fantastic way to dive deep into Environmental, Social, and Governance principles and understand why they're crucial for our future.\n\nFeeling empowered and ready to make a positive impact. Highly recommend this to all students who want to be future-ready leaders!\n\n#ESG #Sustainability #FutureReady #RHBCares #StudentLeadership",

    end_curriculum_text: "Thank you for joining the ESG Student Guide. Keep making a positive impact!",
    
    // --- QUIZ BUTTONS ---
    btn_what_is_esg: "So, what exactly is ESG?",
    btn_esg_breakdown: "Can you break that down for me?",
    btn_what_else_esg: "What else should I know about ESG?",
    btn_explore_e: "Explore 'E' 🌿",
    btn_explore_s: "Explore 'S' 🤝",
    btn_explore_g: "Explore 'G' ✅",
    btn_back_to_breakdown: "Back to E, S, G options",
    btn_continue_to_main_topics: "Let's move on",
    btn_why_important: "Why is it important?",
    btn_more_on_importance: "Tell me more!",
    btn_matter_as_student: "Why does it matter to me as a student?",
    btn_makes_sense: "That makes sense!",
    btn_what_can_i_do: "What can I do about it?",
    btn_what_else_you_can_do: "What else can I do?",
    btn_understood: "Understood!",
    btn_how_relevant: "How is it relevant to my future?",
    btn_do_i_matter: "Do my small actions even matter?",
    btn_anything_else: "Any other key insights?",
    btn_digital_habits: "What about my digital habits?",
    btn_watch_video: "Watch the video! 🎬",
    btn_empowering: "That's empowering!",
    btn_take_quiz: "Let's take the quiz! 🚀",
    btn_ask_more_esg: "I have another question first...",
    btn_no_quiz: "Maybe later",
    btn_back_to_quiz_prompt: "Okay, I'm ready for the quiz now",
    btn_next_question: "Next Question",
    btn_continue: "Continue",
    btn_final_question: "On to the final question!",
    btn_check_answer: "Check My Answer",
    btn_finish_quiz: "I found them all!",
    btn_skip_question: "Skip This Question",
    btn_send_certificate_to_email: "Send My Certificate to Email 📧",
    btn_share_score: "Share My Score on LinkedIn 🚀",
    btn_end_curriculum: "Finish & Exit",
    btn_start_over: "Start Over",
    'Type your answer here...': "Type your answer here...",
    
    // Relevance Branch Buttons
    btn_show_me_areas: "Show me the areas!",
    btn_relevance_career: "My Career 💼",
    btn_relevance_consumer: "Me as a Consumer 🛒",
    btn_relevance_community: "My Community & Planet 🌏",
    btn_explore_other_relevance: "Explore other areas",
    btn_continue_to_career_opps: "Continue",
    btn_tell_me_more: "Tell me more!",
    btn_how_to_learn: "How can I learn more?",
    btn_what_is_your_major: "How does this relate to my major?",
    btn_check_out: "Cool, I'll check those out!",
    btn_thanks_clear: "Thanks, that's clear!",
    btn_ask_more_major: "I have another question about this.",
    btn_ask_about_other_majors: "Ask about a different major",
    btn_got_it_thanks: "Got it, thanks!",
    
    // Personal ESG Branch Buttons
    btn_personal_esg: "Is there such a thing as a 'personal' ESG?",
    btn_how_insurance_is_tool: "How is insurance a tool for this?",
    btn_how_fits_long_game: "How does this fit into the long game?",
    // FIX: Corrected the incomplete 'btn_personal_pillar' property and added the full set of related translation keys.
    btn_personal_pillar_e: "Pillar E: Environmental 🌱",
    btn_personal_pillar_s: "Pillar S: Social 🤝",
    btn_personal_pillar_g: "Pillar G: Governance 📊",
    btn_explore_other_pillars: "Explore other pillars",
    btn_back_to_main_topics: "Back to main topics",
    
    // Anything Else Branch Buttons
    btn_not_just_environmental: "ESG isn't just about 'E'",
    btn_measurable: "ESG is measurable",
    btn_career_currency: "ESG skills are career currency",
    btn_long_term: "ESG is a long-term game",
    btn_small_move: "Small moves matter in ESG",
    btn_explore_more_topics: "Explore more topics",

    // Quiz MCQ Options
    btn_not_esg_career_1: "Sustainability Consultant",
    btn_not_esg_career_2: "Fossil Fuel Lobbyist",
    btn_not_esg_career_3: "ESG Data Analyst",

    btn_digital_habit_sd: "Streaming videos in Standard Definition (SD)",
    btn_digital_habit_leave_on: "Leaving your laptop on standby",
    btn_digital_habit_cloud: "Using cloud storage for everything",

    btn_governance_everyday_1: "Buying fair-trade coffee",
    btn_governance_everyday_2: "Citing sources properly in your assignments",
    btn_governance_everyday_3: "Volunteering at a local shelter",

    btn_ripple_effect_1: "A small, isolated action with no further consequences",
    btn_ripple_effect_2: "One person's action inspiring others to make similar choices",
    btn_ripple_effect_3: "A government policy that affects the entire country",
    
    // Drag and Drop Quiz
    dd_item_E_letter: "E",
    dd_item_S_letter: "S",
    dd_item_G_letter: "G",
    dd_target_E_desc: "Reducing carbon emissions and protecting biodiversity.",
    dd_target_S_desc: "Focusing on employee well-being and community engagement.",
    dd_target_G_desc: "Ensuring transparent financial reporting and anti-corruption policies.",
    'All items placed!': "All items placed!",
    
    // Word Search Quiz
    word_recycle: "RECYCLE",
    def_recycle: "Converting waste into reusable material.",
    ex_recycle: "We recycle plastic bottles to reduce landfill waste.",
    word_compost: "COMPOST",
    def_compost: "Decomposed organic matter used as a fertilizer.",
    ex_compost: "Food scraps can be turned into compost for the garden.",
    word_renewable: "RENEWABLE",
    def_renewable: "A source of energy that is not depleted when used, such as wind or solar power.",
    ex_renewable: "Solar panels generate renewable energy from the sun.",
    word_energy: "ENERGY",
    def_energy: "The strength and vitality required for sustained physical or mental activity.",
    ex_energy: "Switching off lights saves energy.",
    word_water: "WATER",
    def_water: "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain.",
    ex_water: "It's important to conserve water during a drought.",
    word_future: "FUTURE",
    def_future: "The time or a period of time following the moment of speaking or writing; time regarded as still to come.",
    ex_future: "Our actions today will shape the future of our planet.",
    word_green: "GREEN",
    def_green: "Relating to or supporting environmentalism.",
    ex_green: "Many companies are adopting green policies to reduce their impact.",
    word_ethics: "ETHICS",
    def_ethics: "Moral principles that govern a person's behavior or the conducting of an activity.",
    ex_ethics: "Good business ethics are crucial for long-term success.",
    word_impact: "IMPACT",
    def_impact: "A marked effect or influence.",
    ex_impact: "Our small actions can have a big impact on the environment.",
    word_carbon: "CARBON",
    def_carbon: "A chemical element, often associated with greenhouse gas emissions.",
    ex_carbon: "Reducing our carbon footprint is essential to combat climate change.",
    word_social: "SOCIAL",
    def_social: "Relating to society or its organization.",
    ex_social: "Fair treatment of workers is a key social responsibility.",
    word_sustain: "SUSTAIN",
    def_sustain: "To strengthen or support physically or mentally.",
    ex_sustain: "We need to find ways to sustain our planet for future generations.",
  },
  // FIX: Added the missing Malay ('ms') translation object.
  ms: {
    // Header
    learning_progress: "Kemajuan Pembelajaran",
    points: "mata",

    // Progress Bar
    progress_bar_slaying_it: "Anda memang hebat 🔥",
    progress_bar_almost_there: "Hampir sampai, legenda 🏁",

    // Avatar Selection
    avatar_select_title: "Pilih avatar yang comel!",
    avatar_select_subtitle: "Pilih wajah mesra untuk menjadi anda dalam sembang kami! ✨",

    // Onboarding Form
    onboarding_title: "Hanya beberapa butiran!",
    onboarding_subtitle: "Kami perlukan ini untuk sijil penyertaan anda. ✨",
    label_name: "Apa patut saya panggil anda?",
    placeholder_name: "cth. Alex",
    label_fullname: "Nama Penuh (untuk sijil)",
    placeholder_fullname: "cth. Alex Smith",
    label_email: "Alamat E-mel",
    placeholder_email: "cth. alex@universiti.edu",
    label_phone: "Nombor Telefon",
    placeholder_phone: "cth. 012-3456789",
    label_university: "Nama Universiti",
    placeholder_university: "Pilih universiti anda",
    university_other: "Lain-lain",
    label_other_university: "Sila nyatakan universiti anda",
    placeholder_other_university: "cth. Universiti Hebat Saya",
    btn_lets_go: "Jom! 🚀",
    btn_submitting: "Menghantar...",
    error_required: "Ruangan ini diperlukan.",

    // Badges
    badge_big_brain_name: "📘 Mod Otak Geliga!",
    badge_big_brain_tooltip: "Lihat kemajuan itu! Otak anda sangat besar.",
    badge_ate_quiz_name: "🎯 Anda Hebat Jawab Kuiz 🔥",
    badge_ate_quiz_tooltip: "Menyelesaikan kuiz dengan cemerlang. Tiada tandingan.",
    badge_certified_legend_name: "🏆 Legenda Bertauliah ✨",
    badge_certified_legend_tooltip: "Hebatnya! Markah penuh?! Siapa yang genius sekarang 😎",

    // Toasts
    toast_q8_skipped: "Alamak! Anda melangkau soalan terakhir 😅 — tiada kemenangan mutlak kali ini!",
    toast_copied: "Disalin ke papan keratan!",

    // Celebration Modal
    celebration_title: "Tahniah!",
    celebration_subtitle: "Anda telah menyelesaikan perjalanan pembelajaran ESG anda!",
    celebration_final_score: "Skor Akhir Anda",
    btn_close: "Tutup",

    // Decision Tree Nodes
    greeting_text: "Hebat, terima kasih atas semua maklumat, **{userName}**! Kita sudah bersedia. Jom kita belajar perkara yang menakjubkan bersama-sama. Pertama sekali... apa sebenarnya **ESG** tu?",
    what_is_esg_answer_text: "ESG = **Alam Sekitar, Sosial & Tadbir Urus (Environmental, Social & Governance).**\n\nIa adalah rangka kerja tentang cara kita menjaga planet 🌍, manusia 🤝, dan sistem 🏛️.",
    esg_breakdown_hub_text: "Pilihan yang bagus! Ini adalah teras ESG. Pilih satu tonggak untuk diterokai, atau teruskan apabila anda sudah bersedia.",
    esg_breakdown_hub_revisit_text: "Baiklah! Apa lagi yang patut kita terokai di sini?",
    esg_breakdown_e_text: "🌿 **Alam Sekitar (Environmental)**\n\nIni semua tentang bagaimana sesebuah syarikat memberi kesan kepada planet.\n\n- Mengurangkan pelepasan karbon\n- Menjimatkan tenaga dan air\n- Mengurus sisa dengan bertanggungjawab\n- Melindungi biodiversiti\n\nFikirkan: Bagaimanakah syarikat ini memerangi perubahan iklim atau melindungi sumber semula jadi?",
    esg_breakdown_s_text: "🤝 **Sosial (Social)**\n\nIni memberi tumpuan kepada bagaimana syarikat melayan orang—di dalam dan di luar organisasi mereka.\n\n- Kesejahteraan dan kepelbagaian pekerja\n- Penglibatan komuniti\n- Hak asasi manusia dalam rantaian bekalan\n- Keselamatan produk dan pemasaran beretika\n\nFikirkan: Adakah anda akan berbangga untuk bekerja di sini atau membeli daripada mereka, mengetahui cara mereka melayan orang?",
    esg_breakdown_g_text: "✅ **Tadbir Urus (Governance)**\n\nIni adalah tentang kepimpinan dan pembuatan keputusan yang beretika.\n\n- Pelaporan kewangan yang telus\n- Gaji eksekutif yang adil\n- Dasar anti-rasuah\n- Kepelbagaian dalam kepimpinan\n\nFikirkan: Adakah orang yang bertanggungjawab itu akauntabel, adil, dan bertindak demi kepentingan semua orang?",
    main_loop_text: "Apa lagi yang boleh saya tahu tentang ESG?",
    main_loop_revisit_text: "Bagus! Apa seterusnya dalam pengembaraan kita, {userName}? 🗺️",
    why_important_answer_text: "**ESG Ada Di Sekeliling Anda**\n\n- Udara bersih = Bernafas lebih baik\n- Sekolah inklusif = Peluang saksama untuk semua\n- Tadbir urus yang kukuh = Data anda kekal selamat\n\nIa bukan hanya tentang iklim – Ia tentang keadilan, keselamatan, dan masa depan ANDA ✨.",
    more_importance_esg_text: "Jom kita terokai. Apa yang anda ingin tahu?",
    more_importance_esg_revisit_text: "Ada apa-apa lagi mengenai topik ini?",
    more_importance_esg_revisit_text_matter_as_student: "Itu sangat bernas! Bagaimana jika kita terokai **mengapa ini penting kepada anda sebagai seorang pelajar**?",
    more_importance_esg_revisit_text_personal_esg: "Itu sangat bernas! Bagaimana jika kita terokai sama ada **wujudkah ESG untuk individu**?",
    all_subtopics_done_prompt: "Kita telah meliputi beberapa perkara penting di sini. Jom kembali ke topik utama untuk meneruskan penerokaan kita!",

    matter_as_student_answer_text: "**Gambaran Besar: Masa Depan yang Anda Bina**\n\n- **E** = Langit cerah, air bersih, iklim stabil 🌡️ (Tiada lagi banjir di asrama!)\n- **S** = Peluang saksama untuk semua orang – di kampus & di tempat kerja 💼\n- **G** = Aplikasi & syarikat yang menghormati privasi anda 🔒\n\nInilah dunia yang anda sedang bentuk – satu pilihan pada satu masa. 🎯",
    
    personal_esg_intro_text: "Anda sudah tahu ESG bermaksud Alam Sekitar, Sosial, dan Tadbir Urus — rangka kerja untuk membuat pilihan bertanggungjawab yang melindungi planet, manusia, dan nilai-nilai etika.\n\nTetapi inilah kelainan yang kebanyakan pelajar tidak fikirkan: ESG bukan sahaja tentang bagaimana syarikat berkelakuan. Ia juga boleh menjadi amalan hidup peribadi. Dan ya — itu termasuklah sesuatu yang 'dewasa' seperti insurans.",
    personal_esg_tool_explanation_text: "ESG untuk individu bermakna membuat pilihan hari ini yang melindungi anda, komuniti anda, dan diri anda di masa hadapan.\n\n**Alam Sekitar** 🌱 – Bagaimanakah tabiat dan pembelian anda memberi kesan kepada planet?\n**Sosial** 🤝 – Bagaimanakah anda menyokong kesejahteraan orang lain?\n**Tadbir Urus** 📊 – Bagaimanakah anda mengurus sumber, risiko, dan tanggungjawab anda?\n\nYang terakhir itu—Tadbir Urus—di situlah insurans memainkan peranan. Ia adalah perisai risiko peribadi anda, membantu anda terus menyumbang kepada kebaikan alam sekitar dan sosial tanpa dugaan hidup menjejaskan anda.\nSama seperti syarikat yang menjamin masa depan dengan dasar ESG, anda boleh menjamin masa depan hidup anda melalui perancangan yang bertanggungjawab.",
    personal_esg_pillars_hub_text: "Bayangkan anda berumur 26 tahun, baru memulakan kerjaya dan mengamalkan nilai ESG anda—menggunakan pengangkutan awam, membeli jenama beretika, menjadi sukarelawan.\n\nKemudian kecemasan perubatan berlaku.\n\n- **Tanpa insurans:** simpanan habis, ibu bapa terpaksa membantu, kebebasan terjejas.\n- **Dengan insurans:** anda pulih dan terus berada di landasan matlamat anda—tanpa menjejaskan nilai anda.\n\nAdakah anda mahu melihat bagaimana ini berkaitan dengan ESG? Pilih satu tonggak untuk diterokai.",
    personal_esg_pillars_hub_revisit_text: "Pandangan yang hebat. Tonggak mana lagi yang patut kita terokai?",
    personal_esg_pillar_e_answer_text: "Syarikat insurans yang beretika melabur dengan tujuan—membiayai tenaga boleh baharu, bon hijau, dan syarikat beretika dan bukannya industri pencemaran tinggi.\n\nDengan memilih syarikat yang mementingkan ESG, premium anda bukan sahaja melindungi anda—ia juga membantu memacu kemajuan alam sekitar dan sosial.",
    personal_esg_pillar_s_answer_text: "Jika sesuatu berlaku, insurans meringankan beban kewangan keluarga anda.\n\nSesetengah polisi kami juga menyalurkan sebahagian daripada premium anda ke program kesihatan komuniti, bantuan bencana, dan tujuan amal—menjadikan jaring keselamatan peribadi anda sebagai pendorong kebaikan sosial.",
    personal_esg_pillar_g_answer_text: "Sama seperti syarikat menguruskan risiko untuk kekal mampan, anda boleh menguruskan risiko anda sendiri.\n\nInsurans—sama ada kesihatan, hayat, atau penyakit kritikal—melindungi anda daripada satu kejadian tidak dijangka yang menghabiskan kewangan anda.\n\nJaminan itu bermakna anda boleh terus memberi impak positif, mengamalkan nilai ESG anda, dan memberi tumpuan kepada matlamat anda dan bukannya terjerumus ke dalam mod kelangsungan hidup.",

    what_can_i_do_answer_text:
      "ESG dalam Kehidupan Sebenar: Cara Mengamalkannya 🌱\n\n💡 Ia bukan tentang kesempurnaan — hanya pertukaran kecil yang konsisten.\n\n**1️⃣ Belajar Secara Ringkas 📚**\n- Tonton YouTube 10 minit tentang iklim atau perniagaan beretika dan bukannya 'doomscrolling'.\n- Ikuti 3 pencipta kandungan ESG atau kelestarian di TikTok/IG supaya suapan anda memberi maklumat.\n- Dengar podcast kelestarian semasa berulang-alik, berjalan, atau membuat kerja rumah.\n\n**2️⃣ Jadi Ingin Tahu Tentang Jenama 🌏**\n- Semak sama ada pembungkusan snek anda boleh dikitar semula atau dari sumber beretika.\n- Cari halaman kelestarian jenama kegemaran anda — lihat sama ada mereka menepati janji.\n- Bandingkan kedai kopi: siapa yang 'fair-trade' atau menyokong petani tempatan?\n\n**3️⃣ Bina Kemahiran Melalui Penglibatan 💡**\n- Jadi sukarelawan di satu acara hijau atau komuniti setiap semester.\n- Tambah sudut kelestarian pada projek kumpulan (hanya digital, penjejakan karbon).\n- Bantu kelab anda menjadi mesra alam — cawan boleh guna semula, perkongsian kenderaan, kurangkan sisa.\n\n**4️⃣ Beli-belah & Makan Dengan Impak 🛒**\n- Bertukar pakaian dengan rakan atau beli barangan terpakai dan bukannya yang baru.\n- Bawa botol air atau cawan kopi sendiri — diskaun adalah bonus.\n- Cuba satu hidangan tanpa daging sehari untuk mengurangkan jejak karbon anda.\n\n**5️⃣ Gabungkan ESG dalam Pengajian 🎓**\n- Pilih topik esei yang meneroka ESG dalam bidang anda.\n- Cadangkan lawatan sambil belajar yang hijau (bangunan mesra alam, perusahaan sosial).\n- Rujuk sumber dengan betul dalam kerja anda.",
    what_else_student_prompt_text: "Beri saya satu contoh tindakan kecil mesra ESG lain yang boleh anda lakukan di kampus.",
    what_else_student_failed_text: "Tidak mengapa! Kadang-kadang sukar untuk mendapat idea secara spontan. Berikut adalah beberapa contoh tindakan mesra ESG yang hebat di kampus:\n\n- **Menganjurkan pertukaran pakaian** dengan rakan-rakan untuk mempromosikan fesyen kitaran (Sosial & Alam Sekitar).\n- **Memulakan petisyen** untuk lebih banyak stesen isian semula air bagi mengurangkan sisa botol plastik (Alam Sekitar & Tadbir Urus).\n- **Menjadi sukarelawan untuk membantu** kelab kampus menguruskan kewangannya secara telus (Tadbir Urus).\n\nIdea kecil pun boleh membawa perbezaan yang besar!",

    relevance_intro_text: "Berikut adalah beberapa bidang di mana pemahaman yang kukuh tentang ESG sangat bermanfaat untuk masa depan dewasa anda:",
    relevance_hub_text: "Bidang mana yang menarik minat anda dahulu?",
    relevance_hub_revisit_text: "Maklumat yang bagus. Apa lagi dalam senarai anda?",
    relevance_career_answer_text: "**Pilihan kerjaya anda:**\n\nESG bukan lagi sekadar 'kemahiran bonus'—ia adalah satu kemestian dalam pengambilan pekerja. Nama-nama besar seperti Google, Tesla, dan Unilever mahukan graduan yang berfikiran jangka panjang, bukan hanya keuntungan segera.\n\nFahami ESG, dan anda akan menonjol—sama ada mencadangkan idea hijau, mengurus rantaian bekalan beretika, atau menjadikan tempat kerja lebih inklusif. Banyak program graduan kini mempunyai landasan kelestarian yang boleh mempercepatkan anda ke jawatan kepimpinan.\n\n**Mengapa ia penting?**\nBanyak majikan terkemuka kini menjangkakan bakal pekerja memahami ESG. Ia menjadi kemahiran teras di pelbagai industri.",
    relevance_consumer_answer_text: "**Kuasa anda sebagai pengguna:**\n\nSetiap pembelian = satu undi untuk dunia yang anda inginkan.\nSokong jenama yang melayan orang dengan baik dan mesra alam. Media sosial boleh mengubah keadaan dengan cepat—boikot dan siaran tular telah memaksa jenama besar untuk memperbaiki diri.\n\n**Contoh:** Pada tahun 2023, Shein menerbangkan pempengaruh ke sebuah kilang yang diatur supaya mereka menyiarkan 'pekerja gembira…' Ia menjadi bumerang—media sosial serta-merta menggelarnya propaganda.\n\n**Mengapa ia penting?**\nTabiat membeli anda mempengaruhi syarikat mana yang berjaya.",
    relevance_community_answer_text: "**Planet dan Komuniti Anda:**\n\nPerubahan iklim, ketidaksamaan, dan tadbir urus yang buruk bukan 'masalah masa depan'—ia sedang membentuk dunia anda sekarang.\nMenjelang 2050, andalah yang akan menjadi pemimpin yang menyelesaikan masalah hari ini.\n\nESG membantu anda memperjuangkan udara bersih, pekerjaan yang adil, dan kepimpinan beretika—dan menuntut syarikat bertanggungjawab atas apa yang mereka lakukan kepada komuniti anda.\n\n**Mengapa ia penting?**\nAnda mewarisi hasil keputusan korporat hari ini.",

    career_opportunities_answer_text: "**Kemahiran ESG = Kuasa Hebat Kerjaya Anda!** 🦸\n\n**Pekerjaan Baharu Popular** 🔥\n- Perunding Kelestarian\n- Penganalisis Data ESG\n- Pakar Risiko Iklim\n- Pengurus Kepelbagaian & Inklusi\n\n**Tingkatkan Mana-mana Pekerjaan** ✨\n- Akauntan? Audit jejak karbon.\n- Pemasar? Kenal pasti 'greenwashing' & promosikan impak sebenar.\n- Aktuari? Modelkan risiko iklim & sosial.",
    career_next_steps_text: "Bagaimana anda mahu teruskan?",
    how_to_learn_answer_text: "**Mulakan Perjalanan ESG Anda SEKARANG:**\n- Ambil kursus ESG percuma dalam talian (banyak yang ada!) 💻\n- Sertai kelab kelestarian kampus 🌱\n- Ikuti pemimpin & topik ESG di LinkedIn 🔗",
    degree_major_prompt_text: "Saya boleh bantu dengan itu. Apakah jurusan ijazah anda?",
    ask_more_major_prompt_text: "Sudah tentu! Apa lagi yang ada di fikiran anda mengenai jurusan anda dan ESG?",
    do_i_matter_answer_text: "Mudah untuk berfikir, 'Saya hanya seorang pelajar—apa bezanya yang boleh saya buat?'\nTetapi perubahan besar bermula dengan berjuta-juta pilihan kecil yang dibuat oleh orang seperti anda.\n\n**1️⃣ Tabiat Kecil, Impak Besar**\nBawa cawan boleh guna semula setiap hari selama satu semester = 100 cawan dijimatkan. Jika 100 pelajar melakukannya, itu 10,000 cawan.\nMemilih barangan terpakai berbanding fesyen segera mengurangkan sisa, penggunaan air, dan pelepasan.\n\n**2️⃣ Pilihan Anda Mengubah Pasaran**\nPermintaan Gen Z untuk jenama beretika mendorong gergasi seperti Adidas dan Nestlé untuk memikirkan semula rantaian bekalan mereka.\nSetiap ringgit yang dibelanjakan berkata, 'Saya menghargai ini'—dan syarikat mendengar apabila cukup ramai orang bersetuju.\n\n**3️⃣ Anda Mempengaruhi Kalangan Anda**\nRakan-rakan meniru tabiat—botol air, barangan terpakai, pilihan makanan. Apabila anda membuat pilihan yang sedar, ia menormalkannya dan memberi inspirasi kepada orang lain untuk melakukan perkara yang sama.\n\n**4️⃣ Anda Adalah Tenaga Kerja Masa Depan**\nSyarikat mengambil pekerja yang berkongsi nilai mereka. Memahami ESG menjadikan anda calon yang lebih menarik kerana anda menunjukkan anda berfikir tentang gambaran yang lebih besar.\n\n**Mesejnya?**\nAnda bukan setitik air di lautan. Anda adalah sebahagian daripada ombak. 🌊",
    digital_habits_answer_text: "Malah tabiat digital kita mempunyai jejak karbon, daripada menstrim video hingga menghantar e-mel. Menyedari penggunaan tenaga kita adalah langkah pertama yang hebat. Tonton video ini untuk mengetahui lebih lanjut!",
    
    anything_else_hub_text: "Ini adalah beberapa pandangan utama yang benar-benar boleh meningkatkan pemahaman ESG anda. Yang mana satu menarik minat anda?",
    anything_else_hub_revisit_text: "Hebat! Pandangan utama apa lagi yang patut kita selami?",
    anything_else_not_just_environmental_text: "**ESG Bukan Sekadar 'Alam Sekitar'**\n\nESG = Alam Sekitar 🌍 + Sosial 🤝 + Tadbir Urus 🏛️.\nIa bukan sahaja tentang perubahan iklim atau kitar semula—ia juga mengenai hak pekerja, kepelbagaian, gaji yang adil, anti-rasuah, dan kepimpinan beretika. Sebuah jenama boleh menjadi 'hijau' tetapi masih gagal ESG jika ia mengeksploitasi pekerja atau menyembunyikan salah laku.\n\n**Contoh:** Pada tahun 2024, Boohoo menghadapi kritikan kerana upah kilang yang rendah di Leicester walaupun mempromosikan barisan pakaian 'lestari' mereka. Pemasaran hijau tidak dapat menyembunyikan kegagalan sosial.",
    anything_else_measurable_text: "**ESG Boleh Diukur dan Telus**\n\nESG bukan cakap kosong—terdapat skor dan data sebenar. Semak syarikat di Sustainalytics, MSCI ESG Ratings, atau aplikasi seperti Good On You untuk fesyen. Ini menjadikannya lebih sukar bagi jenama untuk melakukan 'greenwash'.\n\n**Contoh:** Pada tahun 2023, 'Conscious Collection' H&M mendapat skor rendah di Good On You kerana kekurangan ketelusan dalam rantaian bekalan, mencetuskan perdebatan dalam talian dan seruan untuk penambahbaikan.",
    anything_else_career_currency_text: "**Kemahiran ESG adalah Mata Wang Kerjaya**\n\nDari kewangan dan teknologi hingga reka bentuk, penjagaan kesihatan, dan kejuruteraan, ESG menjadi kemahiran yang mesti ada. Ia terdapat dalam iklan pekerjaan, penilaian prestasi, dan program kepimpinan. Pelajarinya sekarang dan anda akan mendahului sebelum anda tamat pengajian.\n\n**Contoh:** Microsoft kini memasukkan matlamat kelestarian dalam penilaian prestasi kepimpinan—pekerja dengan kepakaran ESG mempunyai kelebihan yang jelas dalam kenaikan pangkat.",
    anything_else_long_term_text: "**ESG untuk Permainan Jangka Panjang**\n\nMengabaikan ESG boleh bermakna skandal, tindakan undang-undang, atau keruntuhan perlahan—menjamin masa depan adalah penting untuk syarikat dan kerjaya anda sendiri. Pelajar yang berfikir ESG sekarang membina laluan mampan yang bertahan berdekad-dekad.\n\n**Contoh:** Skandal pelepasan diesel Volkswagen menghapuskan berbilion-bilion nilai, merosakkan kepercayaan, dan masih menjadi kisah peringatan kerana mengabaikan tadbir urus dan piawaian alam sekitar.",
    anything_else_small_move_text: "**Langkah Kecil untuk ESG**\n\nTiada siapa yang sempurna dari hari pertama. Mulakan dengan tindakan kecil yang konsisten—kurangkan sisa, sokong jenama beretika, suarakan isu. ESG adalah satu perjalanan, dan langkah yang tidak sempurna pun membuat perbezaan.\n\n**Contoh:** Kempen yang diterajui pelajar seperti Klima Action Malaysia bermula dengan mogok iklim kecil di KL dan berkembang menjadi suara kebangsaan yang mempengaruhi dasar alam sekitar.",
    
    learning_complete_prompt_quiz_text: "Wah, **{userName}**, anda telah menyerap begitu banyak pengetahuan! 🧠 Anda telah melengkapkan bahagian pembelajaran teras.\n\nKini tiba masanya untuk menguji kemahiran anda dengan kuiz pendek. Atau, jika ada apa-apa lagi yang anda ingin tahu, jangan ragu untuk bertanya kepada saya sekarang.",
    ask_more_esg_prompt_text: "Sudah tentu. Apa yang ada di fikiran anda? Saya di sini untuk membantu menjelaskan sebarang soalan terakhir yang anda ada tentang ESG sebelum kuiz.",

    final_thanks_no_quiz_text: "Tiada masalah, **{userName}**! Perkara yang paling penting ialah belajar. Anda telah melakukan kerja yang hebat meneroka dunia ESG bersama saya. Skor akhir anda, berdasarkan kemajuan pembelajaran anda, ialah **{score}**!\n\n**Nota Impak AI:** Hanya dengan berbual, kita telah menggunakan sedikit tenaga, menghasilkan kira-kira **{co2}g CO2** – itu seperti menjalankan pendingin hawa selama {acMinutes} minit atau kereta memandu sejauh {carKm} km. {aiReminder} Terima kasih kerana belajar dengan saya!",
    quiz_q1_text_dd: "Mari kita mulakan dengan asas! Seret dan lepaskan huruf yang betul ke tonggak ESG yang sepadan.",
    quiz_q1_correct_text: "Tepat sekali! E untuk Alam Sekitar, S untuk Sosial, dan G untuk Tadbir Urus. Anda telah menguasai asasnya. ✅",
    quiz_q1_incorrect_text: "Kurang tepat! Ingat: E untuk Alam Sekitar (planet), S untuk Sosial (manusia), dan G untuk Tadbir Urus (sistem). Mari teruskan!",

    quiz_q2_text: "Antara berikut, yang manakah **BUKAN** kerjaya biasa dalam bidang ESG?",
    quiz_q2_correct_text: "Betul! Walaupun 'Pelobi Bahan Api Fosil' adalah satu kerjaya, ia secara amnya menentang matlamat ESG, bukan menyokongnya. Anda bijak! 🧠",
    quiz_q2_incorrect_text: "Hmm, itu adalah kerjaya yang sah berkaitan ESG. Yang tidak begitu sesuai ialah 'Pelobi Bahan Api Fosil' kerana ia sering menentang prinsip ESG.",

    quiz_q3_text: "Apakah tabiat digital mudah yang mengurangkan kesan alam sekitar anda?",
    quiz_q3_correct_text: "Tepat sekali! Menstrim dalam Definisi Standard (SD) menggunakan data dan tenaga yang jauh lebih sedikit daripada HD atau 4K. Perubahan kecil, impak besar! 💡",
    quiz_q3_incorrect_text: "Fikiran yang baik, tetapi itu bukan yang paling berkesan. Menstrim dalam SD dan bukannya HD adalah cara yang bagus untuk mengurangkan penggunaan tenaga dari pusat data.",

    quiz_q4_text: "Antara berikut, yang manakah contoh **Tadbir Urus** yang baik dalam kehidupan seharian anda?",
    quiz_q4_correct_text: "Sempurna! Merujuk sumber anda adalah tentang integriti akademik, ketelusan, dan akauntabiliti—prinsip tadbir urus utama. Syabas! 🏆",
    quiz_q4_incorrect_text: "Itu lebih berkaitan dengan tonggak Alam Sekitar atau Sosial. Tadbir Urus yang baik adalah tentang akauntabiliti dan sistem beretika, seperti merujuk sumber dengan betul dalam tugasan anda.",
    
    quiz_q5_text: "Apakah 'kesan riak' dalam konteks pilihan ESG peribadi?",
    quiz_q5_correct_text: "Anda betul! Pilihan anda mempengaruhi rakan, keluarga, dan juga pasaran, mewujudkan gelombang perubahan positif. 🌊",
    quiz_q5_incorrect_text: "Kurang tepat. Kesan riak ialah bagaimana tindakan kecil positif anda boleh memberi inspirasi dan mempengaruhi orang lain, membawa kepada impak kolektif yang lebih besar.",
    
    quiz_q6_prompt_text: "Masa untuk soalan yang lebih mendalam. Sejauh manakah anda penting dalam menyelamatkan Bumi kita? (Tiada jawapan yang salah, hanya pendapat anda!)",
    
    quiz_q7_prompt_text: "Soalan terakhir sebelum cabaran akhir! Apakah satu tindakan yang akan anda ambil untuk meningkatkan impak ESG anda?",
    
    quiz_q8_text: "Cabaran akhir! Cari 7 perkataan berkaitan ESG yang tersembunyi dalam grid. Ini adalah ujian tumpuan dan pengetahuan. Semoga berjaya! ✨",
    
    quiz_end_text: "Dan tamatlah sudah! Anda telah secara rasmi melengkapkan Kuiz Panduan Pelajar ESG. Usaha yang hebat!\n\nSkor akhir anda ialah **{score}** daripada 1000, dengan **{quizCorrectAnswers}** jawapan yang betul.\n\n**Nota Impak AI:** Hanya dengan berbual, kita telah menggunakan sedikit tenaga, menghasilkan kira-kira **{co2}g CO2** – itu seperti menjalankan pendingin hawa selama {acMinutes} minit atau kereta memandu sejauh {carKm} km. {aiReminder} Terima kasih kerana belajar dengan saya!",
    
    certificate_sent_text: "Selesai! Sijil penyertaan anda telah dihantar ke alamat e-mel berdaftar anda. Apa yang anda ingin lakukan seterusnya?",

    share_prompt_text: "Ini adalah siaran sedia untuk dikongsi di LinkedIn anda. Biarkan dunia tahu tentang pencapaian hebat anda!",
    linkedin_share_text: "Saya baru sahaja melengkapkan Panduan Pelajar ESG oleh RHB Insurance dan mendapat {score} mata! 🌿\n\nChatbot interaktif ini adalah cara yang hebat untuk mendalami prinsip Alam Sekitar, Sosial, dan Tadbir Urus dan memahami mengapa ia penting untuk masa depan kita.\n\nRasa bersemangat dan bersedia untuk memberi impak positif. Sangat mengesyorkan ini kepada semua pelajar yang ingin menjadi pemimpin yang bersedia untuk masa depan!\n\n#ESG #Kelestarian #SediaMasaDepan #RHBCares #KepimpinanPelajar",
    
    end_curriculum_text: "Terima kasih kerana menyertai Panduan Pelajar ESG. Teruskan memberi impak positif!",

    // --- QUIZ BUTTONS ---
    btn_what_is_esg: "Jadi, apa sebenarnya ESG?",
    btn_esg_breakdown: "Boleh anda jelaskan?",
    btn_what_else_esg: "Apa lagi yang patut saya tahu tentang ESG?",
    btn_explore_e: "Terokai 'E' 🌿",
    btn_explore_s: "Terokai 'S' 🤝",
    btn_explore_g: "Terokai 'G' ✅",
    btn_back_to_breakdown: "Kembali ke pilihan E, S, G",
    btn_continue_to_main_topics: "Jom teruskan",
    btn_why_important: "Mengapa ia penting?",
    btn_more_on_importance: "Beritahu saya lebih lanjut!",
    btn_matter_as_student: "Mengapa ia penting kepada saya sebagai pelajar?",
    btn_makes_sense: "Masuk akal!",
    btn_what_can_i_do: "Apa yang boleh saya lakukan?",
    btn_what_else_you_can_do: "Apa lagi yang boleh saya lakukan?",
    btn_understood: "Faham!",
    btn_how_relevant: "Bagaimana ia relevan dengan masa depan saya?",
    btn_do_i_matter: "Adakah tindakan kecil saya penting?",
    btn_anything_else: "Ada pandangan utama lain?",
    btn_digital_habits: "Bagaimana dengan tabiat digital saya?",
    btn_watch_video: "Tonton video! 🎬",
    btn_empowering: "Ia memberdayakan!",
    btn_take_quiz: "Jom ambil kuiz! 🚀",
    btn_ask_more_esg: "Saya ada soalan lain dahulu...",
    btn_no_quiz: "Mungkin kemudian",
    btn_back_to_quiz_prompt: "Okay, saya sudah bersedia untuk kuiz sekarang",
    btn_next_question: "Soalan Seterusnya",
    btn_continue: "Teruskan",
    btn_final_question: "Ke soalan terakhir!",
    btn_check_answer: "Semak Jawapan Saya",
    btn_finish_quiz: "Saya dah jumpa semua!",
    btn_skip_question: "Langkau Soalan Ini",
    btn_send_certificate_to_email: "Hantar Sijil Saya ke E-mel 📧",
    btn_share_score: "Kongsi Skor Saya di LinkedIn 🚀",
    btn_end_curriculum: "Selesai & Keluar",
    btn_start_over: "Mula Semula",
    'Type your answer here...': "Taip jawapan anda di sini...",

    // Relevance Branch Buttons
    btn_show_me_areas: "Tunjukkan saya bidang-bidangnya!",
    btn_relevance_career: "Kerjaya Saya 💼",
    btn_relevance_consumer: "Saya sebagai Pengguna 🛒",
    btn_relevance_community: "Komuniti & Planet Saya 🌏",
    btn_explore_other_relevance: "Terokai bidang lain",
    btn_continue_to_career_opps: "Teruskan",
    btn_tell_me_more: "Beritahu saya lebih lanjut!",
    btn_how_to_learn: "Bagaimana saya boleh belajar lebih lanjut?",
    btn_what_is_your_major: "Bagaimana ini berkaitan dengan jurusan saya?",
    btn_check_out: "Baik, saya akan semaknya!",
    btn_thanks_clear: "Terima kasih, jelas!",
    btn_ask_more_major: "Saya ada soalan lain tentang ini.",
    btn_ask_about_other_majors: "Tanya tentang jurusan lain",
    btn_got_it_thanks: "Faham, terima kasih!",

    // Personal ESG Branch Buttons
    btn_personal_esg: "Adakah wujud 'ESG peribadi'?",
    btn_how_insurance_is_tool: "Bagaimana insurans menjadi alat untuk ini?",
    btn_how_fits_long_game: "Bagaimana ini sesuai dengan perancangan jangka panjang?",
    btn_personal_pillar_e: "Tonggak E: Alam Sekitar 🌱",
    btn_personal_pillar_s: "Tonggak S: Sosial 🤝",
    btn_personal_pillar_g: "Tonggak G: Tadbir Urus 📊",
    btn_explore_other_pillars: "Terokai tonggak lain",
    btn_back_to_main_topics: "Kembali ke topik utama",

    // Anything Else Branch Buttons
    btn_not_just_environmental: "ESG bukan hanya tentang 'E'",
    btn_measurable: "ESG boleh diukur",
    btn_career_currency: "Kemahiran ESG adalah mata wang kerjaya",
    btn_long_term: "ESG adalah permainan jangka panjang",
    btn_small_move: "Langkah kecil penting dalam ESG",
    btn_explore_more_topics: "Terokai lebih banyak topik",

    // Quiz MCQ Options
    btn_not_esg_career_1: "Perunding Kelestarian",
    btn_not_esg_career_2: "Pelobi Bahan Api Fosil",
    btn_not_esg_career_3: "Penganalisis Data ESG",

    btn_digital_habit_sd: "Menstrim video dalam Definisi Standard (SD)",
    btn_digital_habit_leave_on: "Membiarkan komputer riba anda dalam mod sedia",
    btn_digital_habit_cloud: "Menggunakan storan awan untuk semuanya",

    btn_governance_everyday_1: "Membeli kopi 'fair-trade'",
    btn_governance_everyday_2: "Merujuk sumber dengan betul dalam tugasan anda",
    btn_governance_everyday_3: "Menjadi sukarelawan di pusat perlindungan tempatan",

    btn_ripple_effect_1: "Satu tindakan kecil terpencil tanpa akibat lanjut",
    btn_ripple_effect_2: "Tindakan seseorang memberi inspirasi kepada orang lain untuk membuat pilihan yang sama",
    btn_ripple_effect_3: "Dasar kerajaan yang mempengaruhi seluruh negara",

    // Drag and Drop Quiz
    dd_item_E_letter: "E",
    dd_item_S_letter: "S",
    dd_item_G_letter: "G",
    dd_target_E_desc: "Mengurangkan pelepasan karbon dan melindungi biodiversiti.",
    dd_target_S_desc: "Memberi tumpuan kepada kesejahteraan pekerja dan penglibatan komuniti.",
    dd_target_G_desc: "Memastikan pelaporan kewangan yang telus dan dasar anti-rasuah.",
    'All items placed!': "Semua item telah diletakkan!",

    // Word Search Quiz
    word_recycle: "KITAR",
    def_recycle: "Menukar sisa menjadi bahan yang boleh digunakan semula.",
    ex_recycle: "Kami mengitar semula botol plastik untuk mengurangkan sisa tapak pelupusan.",
    word_compost: "KOMPOS",
    def_compost: "Bahan organik yang terurai digunakan sebagai baja.",
    ex_compost: "Sisa makanan boleh dijadikan kompos untuk taman.",
    word_renewable: "BARU",
    def_renewable: "Sumber tenaga yang tidak habis apabila digunakan, seperti tenaga angin atau suria.",
    ex_renewable: "Panel suria menjana tenaga boleh baharu daripada matahari.",
    word_energy: "TENAGA",
    def_energy: "Kekuatan dan daya hidup yang diperlukan untuk aktiviti fizikal atau mental yang berterusan.",
    ex_energy: "Mematikan lampu menjimatkan tenaga.",
    word_water: "AIR",
    def_water: "Cecair tidak berwarna, telus, tidak berbau yang membentuk laut, tasik, sungai, dan hujan.",
    ex_water: "Penting untuk menjimatkan air semasa musim kemarau.",
    word_future: "DEPAN",
    def_future: "Masa atau tempoh masa selepas saat bercakap atau menulis; masa yang dianggap masih akan datang.",
    ex_future: "Tindakan kita hari ini akan membentuk masa depan planet kita.",
    word_green: "HIJAU",
    def_green: "Berkaitan dengan atau menyokong environmentalisme.",
    ex_green: "Banyak syarikat mengamalkan dasar hijau untuk mengurangkan impak mereka.",
    word_ethics: "ETIKA",
    def_ethics: "Prinsip moral yang mengawal tingkah laku seseorang atau pengendalian sesuatu aktiviti.",
    ex_ethics: "Etika perniagaan yang baik adalah penting untuk kejayaan jangka panjang.",
    word_impact: "IMPAK",
    def_impact: "Kesan atau pengaruh yang ketara.",
    ex_impact: "Tindakan kecil kita boleh memberi impak besar kepada alam sekitar.",
    word_carbon: "KARBON",
    def_carbon: "Unsur kimia, sering dikaitkan dengan pelepasan gas rumah hijau.",
    ex_carbon: "Mengurangkan jejak karbon kita adalah penting untuk memerangi perubahan iklim.",
    word_social: "SOSIAL",
    def_social: "Berkaitan dengan masyarakat atau organisasinya.",
    ex_social: "Layanan adil terhadap pekerja adalah tanggungjawab sosial yang utama.",
    word_sustain: "LESTARI",
    def_sustain: "Memperkuat atau menyokong secara fizikal atau mental.",
    ex_sustain: "Kita perlu mencari cara untuk melestarikan planet kita untuk generasi akan datang.",
  },
};
