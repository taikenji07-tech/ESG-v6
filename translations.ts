
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
    start_text: "Hiii! 👋 I'm Capytron, your super friendly guide to all things ESG! I'm so excited to chat with you. To start, what should I call you?",
    collect_full_name_text: "It's a pleasure to meet you, **{userName}**! For the certificate we'll issue at the end, please provide your full name as you'd like it to appear.",
    collect_email_text: "Thank you! And what's your email address? Please double-check it, as we'll send your certificate via email.",
    collect_university_text: "Which university are you from?",
    greeting_text: "Awesome, we're all set, **{userName}**! Let's dive in and learn some amazing things together. First up... what even **is** ESG?",
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
    personal_esg_pillar_e_answer_text: "RHB Insurance invests with purpose—funding renewable energy, green bonds, and ethical companies instead of high-pollution industries.\n\nBy choosing ESG conscious companies, your premiums don’t just protect you—they also help drive environmental and social progress.",
    personal_esg_pillar_s_answer_text: "If something happens, RHB Insurance eases the financial burden on your family.\n\nSome of our policies even channel part of your premiums into community health programs, disaster relief, and charitable causes—turning your personal safety net into a force for social good.",
    personal_esg_pillar_g_answer_text: "Just like companies manage risk to stay sustainable, you can manage your own.\n\nRHB Insurance—whether health, life, or critical illness—protects you from one unexpected event wiping out your finances.\n\nThat security means you can keep making a positive impact, live your ESG values, and focus on your goals instead of slipping into survival mode.",

    what_can_i_do_answer_text:
      "ESG IRL: How to Actually Live It 🌱\n\n💡 It’s not about perfection — just small, consistent swaps.\n\n**1️⃣ Learn in Snack-Sized Ways 📚**\n- Watch a quick 10-min YouTube on climate or ethical business instead of doomscrolling.\n- Follow 3 ESG or sustainability creators on TikTok/IG so your feed feeds you.\n- Listen to a sustainability podcast while commuting, walking, or doing chores.\n\n**2️⃣ Be Brand-Curious 🌏**\n- Check if your snack packaging is recyclable or ethically sourced.\n- Look up your fave brand’s sustainability page — see if they’re walking the talk.\n- Compare coffee shops: who’s fair-trade or supports local farmers?\n\n**3️⃣ Build Skills Through Involvement 💡**\n- Volunteer at one green or community event each semester.\n- Add a sustainability angle to group projects (digital-only, carbon tracking).\n- Help your club go eco — reusable cups, ride-pooling, less waste.\n\n**4️⃣ Shop & Eat with Impact 🛒**\n- Swap clothes with friends or thrift instead of buying new.\n- Bring your own water bottle or coffee cup — discounts are a bonus.\n- Try one meatless meal a day to cut your carbon footprint.\n\n**5️⃣ Blend ESG into Studies 🎓**\n- Choose essay topics that explore ESG in your field.\n- Suggest green field trips (eco-buildings, social enterprises).\n- Start a “Green Corner” in your class group chat to share cool finds.",
    what_else_student_prompt_text:
      "Give me an example of another small ESG-friendly action you could take on campus.",
    
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
      "It’s easy to think, “I’m just one student—what difference can I make?”\n But big change starts with millions of small choices made by people like you.\n\n**1️⃣ Small Habits, Big Impact**\nBring a reusable cup daily for a semester = 100 cups saved. If 100 students do it, that’s 10,000 cups.\nChoosing thrift over fast fashion cuts waste, water use, and emissions.\n\n**2️⃣ Your Choices Shift the Market**\nGen Z’s demand for ethical brands is pushing giants like Adidas and Nestlé to rethink supply chains.\nEvery ringgit spent says, “I value this”—and companies listen when enough people agree.\n\n**3️⃣ You Influence Your Circle**\nFriends copy habits—water bottles, skipping plastic straws, speaking up on ethics.\nStudent campaigns have moved universities to renewable energy and fossil fuel divestment.\n\n**4️⃣ You’re Tomorrow’s Decision-Makers**\nSoon you could manage budgets, supply chains, or lead teams.\nLearning ESG now means you’ll know how to balance profit with purpose later.\n\nThink of it like planting seeds—small acts today grow into policies, innovations, and cultural shifts tomorrow. 🌱",
    digital_habits_answer_text:
      "**Your Digital Life = BIG ESG Impact** 💻\n\n- **E**: The internet isn't magic! Every search, stream, & click uses tons of energy. \n  *Tip: Stream in SD, not HD, to save power!* 💡\n- **S**: Who you 'like' & share shapes online communities. \n  *Share responsibly & report hate – build a better digital world!* ❤️\n- **G**: Creepy targeted ads? That's data governance. \n  *Protect your data: strong passwords & think before you share!* 🔐\n\nYour digital citizenship = ESG in action. Want to see just how much your online habits can impact the environment?",
    learning_complete_prompt_quiz_text:
      "Thanks for chatting about ESG with us!! Hoping you learnt something new, {userName}. To lock in your knowledge, fancy a quick quiz?\n\n**Just a heads up:** You'll need to complete the quiz to claim your certificate!",
    ask_more_esg_prompt_text: "Absolutely, I'm here to help. What would you like to know about ESG?",
    
    // Quiz
    quiz_q1_text_dd: "Question 1: Drag the pillar label (E, S, or G) to match its definition.",
    dd_label_E: "E",
    dd_label_S: "S",
    dd_label_G: "G",
    dd_item_E: "Clean energy, reduced waste, and resource conservation.",
    dd_item_S: "Fair labor practices, community relations, and diversity.",
    dd_item_G: "Ethical leadership, transparency, and shareholder rights.",
    
    quiz_q1_correct_text: "Correct! You've matched them all perfectly.",
    quiz_q1_incorrect_text: "Not quite. The correct matches are: **E** for Environmental (like clean energy), **S** for Social (like fair practices), and **G** for Governance (like ethical leadership). Let's move on!",
    
    quiz_q2_text:
      "Question 2: Which of the following are NOT ESG related careers?",
    quiz_q2_correct_text:
      "You got it! While important, a food critic isn't a core ESG role.",
    quiz_q2_incorrect_text: "That's not it. The correct answer is **Food Critic**. While Diversity Managers and Climate Specialists are core ESG roles, a food critic's job doesn't directly relate to ESG principles.",
      
    quiz_q3_text:
      "Question 3: Which of these digital habits can reduce the environmental impact?",
    quiz_q3_correct_text:
      "Exactly! Streaming in SD instead of HD uses significantly less data and energy.",
    quiz_q3_incorrect_text: "Good try, but the best answer is **streaming in SD**. Leaving your computer on and using the cloud constantly both consume significant energy. Streaming in Standard Definition is a simple way to reduce data and energy usage.",

    quiz_q4_text:
      "Question 4: According to the 'ESG in Everyday Life' section, which of these is an example of a 'Governance (G)' action?",
    quiz_q4_correct_text:
      "Perfect! Citing sources is an act of academic integrity, which is a core Governance principle.",
    quiz_q4_incorrect_text: "Almost! The correct answer is **citing sources properly**. This is an act of integrity and transparency, which are key 'Governance' principles. The other options fall under 'Environmental' and 'Social'.",

    quiz_q5_text:
      "Question 5: In the 'Does what I do really matter?' section, what is the 'ripple effect' of bringing a reusable coffee cup?",
    quiz_q5_correct_text:
      "That's the one! Your action inspires a wider chain of events.",
    quiz_q5_incorrect_text: "Close, but the 'ripple effect' described is about how **your action inspires others and leads to bigger changes**. It's not just about a personal benefit, but about creating a positive chain reaction.",

    quiz_q6_prompt_text:
      "Question 6 (Open-Ended): How much do you matter in saving our Earth?",
    quiz_q7_prompt_text:
      "Question 7 (Open-Ended): What is one action you will take to improve your ESG impact?",
    quiz_q8_text: "Final Question: Find the 7 sustainability words hidden in the grid! When you find a word, I'll tell you what it means. 🕵️‍♀️",

    quiz_end_text:
      "Quiz complete! You got **{quizCorrectAnswers} out of 8** questions correct. Your final score is **{score} out of 1000 points**!\n\n🌍 **Fun ESG Fact:** Your interactions created about **{co2}g of CO₂**. That's like running an A/C for **{acMinutes} minutes** or driving a car for **{carKm} km**!\n\n{aiReminder}",
    final_thanks_no_quiz_text:
      "No problem, {userName}! Your final score is **{score} out of 1000 points**. Thanks for learning with me today. ✨\n\n🌍 **Fun ESG Fact:** Your interactions created about **{co2}g of CO₂**. That's like running an A/C for **{acMinutes} minutes** or driving a car for **{carKm} km**!\n\n{aiReminder}",
    certificate_sent_text: "✅ Your certificate will be sent to your email within 2–3 minutes.",
    form_submission_error_text: "I'm sorry, there was an error submitting your information. Please try clicking the button again.",
    end_curriculum_text: "Thanks for learning with me! It was great chatting with you. Feel free to start over any time. Goodbye! 👋",
    share_prompt_text: "Awesome! Here's a post you can share to celebrate your achievement.",
    linkedin_share_text: "I just completed the ESG Student Guide by RHB, scoring {score} out of 1000 points, and earned a certificate of completion! It's a fantastic interactive way to learn about Environmental, Social, and Governance principles. #ESG #Sustainability #RHBCares #RHBInsurance",

    // Buttons
    btn_what_is_esg: "What is ESG?",
    btn_what_else_esg: "Got it! What's next?",
    btn_esg_breakdown: "Give me a quick breakdown of ESG concepts.",
    btn_explore_e: "🌿 E: Environmental",
    btn_explore_s: "🤝 S: Social",
    btn_explore_g: "✅ G: Governance",
    btn_continue_to_main_topics: "All clear, let's move on!",
    btn_back_to_breakdown: "I want to see other pillars",
    btn_why_important: "Why is ESG important?",
    btn_what_can_i_do: "How can I fit ESG into my daily life?",
    btn_how_relevant: "How is this relevant to my future?",
    btn_do_i_matter: "Does what I do really matter?",
    btn_more_on_importance: "More on the importance of ESG",
    btn_matter_as_student: "Why does it matter to me as a student?",
    btn_personal_esg: "Is there such a thing as ESG for individuals?",
    btn_how_insurance_is_tool: "How Does Insurance Become a Personal ESG Tool?",
    btn_how_fits_long_game: "How does this fit the 'Long Game'?",
    btn_personal_pillar_e: "Environmental: Choosing ESG-aligned insurers",
    btn_personal_pillar_s: "Social: Supporting your community",
    btn_personal_pillar_g: "Governance: Protecting your financial stability",
    btn_explore_other_pillars: "I want to explore more.",
    btn_makes_sense: "That makes sense!",
    btn_yes_go_back: "Yes, let's go back.",
    btn_what_else_you_can_do: "What else can I do?",
    btn_understood: "Understood!",
    btn_show_me_areas: "Let's explore them!",
    btn_relevance_career: "🚀 Your career choices",
    btn_relevance_consumer: "🛒 Your power as a consumer",
    btn_relevance_community: "🌍 Your Planet and Community",
    btn_explore_other_relevance: "I want to explore other areas",
    btn_continue_to_career_opps: "Got it. So what are these career opportunities?",
    btn_career_opportunities: "What about career opportunities?",
    btn_tell_me_more: "Interesting! Tell me more.",
    btn_how_to_learn: "How do I learn such skills?",
    btn_what_is_your_major: "What can I do regarding ESG in my major?",
    btn_check_out: "Great, I'll check those out.",
    btn_very_cool: "Very cool!",
    btn_thanks_clear: "Thanks, that's clear!",
    btn_ask_more_major: "I have another question about this.",
    btn_ask_about_other_majors: "I would like to ask about other majors as well.",
    btn_got_it_thanks: "Got it, thanks!",
    btn_digital_habits: "How do my digital habits impact ESG?",
    btn_watch_video: "Watch a Quick Video!",
    btn_empowering: "That's empowering!",
    btn_back_to_main_topics: "Let's go back to the main topics.",
    btn_take_quiz: "Let's have a short quiz!!",
    btn_no_quiz: "No thanks, I'm good.",
    btn_ask_more_esg: "I have a question first...",
    btn_back_to_quiz_prompt: "Great, I'm ready now.",
    btn_esg_stand_for_1: "Environmental, Social, Governance",
    btn_esg_stand_for_2: "Energy, Sustainability, Growth",
    btn_esg_stand_for_3: "Economics, Society, Globalization",
    btn_next_question: "Next Question!",
    btn_final_question: "Final Question!",
    btn_not_esg_career_1: "Food Critic",
    btn_not_esg_career_2: "Diversity & Inclusion Manager",
    btn_not_esg_career_3: "Climate Risk Specialist",
    btn_digital_habit_1: "Streaming videos in Standard Definition (SD)",
    btn_digital_habit_2: "Leaving your computer on 24/7",
    btn_digital_habit_3: "Always using cloud storage for all files",
    btn_governance_action_1: "Bringing a reusable water bottle",
    btn_governance_action_2: "Citing sources properly in your work",
    btn_governance_action_3:
      "Sharing a local business's post on social media",
    btn_ripple_effect_1: "It saves you a little money",
    btn_ripple_effect_2:
      "It inspires friends to do the same and encourages cafes to offer discounts",
    btn_ripple_effect_3: "It is a purely symbolic gesture with no real impact",
    btn_see_results: "See my results!",
    btn_continue: "Continue",
    btn_claim_certificate: "Claim Your Certificate",
    btn_share_score: "Share My Score",
    btn_share_linkedin: "Share on LinkedIn",
    btn_copy_text: "Copy Post Text",
    btn_open_linkedin: "Open LinkedIn & Paste",
    btn_back_to_final_options: "Back to Final Options",
    btn_start_over: "Start Over",
    btn_end_curriculum: "End Session",
    btn_check_answer: "Check Answer",
    btn_finish_quiz: "Finish Quiz",
    'All items placed!': 'All items placed!',
    'Drop here': 'Drop here',
    'Type your answer here...': 'Type your answer here...',
    'toggle_language_to_ms': 'Switch to Bahasa Malaysia',
    'toggle_language_to_en': 'Switch to English',
    btn_skip_question: "Skip Question",
    'word_definition_title': 'Vocabulary Unlocked!',
    
    // Word Search Words & Definitions
    'word_recycle': "RECYCLE",
    'def_recycle': "To convert waste into reusable material.",
    'ex_recycle': "Example: We recycle plastic bottles to make new products.",
    'word_compost': "COMPOST",
    'def_compost': "Decayed organic material used as a fertilizer.",
    'ex_compost': "Example: She adds fruit peels to her compost bin.",
    'word_renewable': "RENEWABLE",
    'def_renewable': "A source of energy that is not depleted when used, such as wind or solar power.",
    'ex_renewable': "Example: Solar panels are a key renewable energy technology.",
    'word_energy': "ENERGY",
    'def_energy': "The strength and vitality required for sustained physical or mental activity.",
    'ex_energy': "Example: Saving energy by turning off lights is good for the environment.",
    'word_water': "WATER",
    'def_water': "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain.",
    'ex_water': "Example: Conserving water is crucial in dry climates.",
    'word_future': "FUTURE",
    'def_future': "The time or a period of time following the moment of speaking or writing.",
    'ex_future': "Example: Our actions today will determine the future of our planet.",
    'word_green': "GREEN",
    'def_green': "Relating to or supporting the protection of the environment.",
    'ex_green': "Example: The company launched a new 'green' initiative to reduce waste.",
    'word_ethics': "ETHICS",
    'def_ethics': "Moral principles that govern a person's behavior or the conducting of an activity.",
    'ex_ethics': "Example: Strong business ethics are a key part of good governance.",
    'word_impact': "IMPACT",
    'def_impact': "A marked effect or influence.",
    'ex_impact': "Example: Small changes can have a big impact on your carbon footprint.",
    'word_carbon': "CARBON",
    'def_carbon': "Relating to carbon dioxide emissions, often used in the context of a 'carbon footprint'.",
    'ex_carbon': "Example: Cycling instead of driving helps reduce your carbon emissions.",
    'word_social': "SOCIAL",
    'def_social': "Relating to society or its organization, and the welfare of human beings as members of it.",
    'ex_social': "Example: Fair wages and safe working conditions are important social issues.",
    'word_sustain': "SUSTAIN",
    'def_sustain': "To strengthen or support physically or mentally; to cause to continue for an extended period.",
    'ex_sustain': "Example: We need to find ways to sustain our planet's resources for future generations."
  },
  ms: {
    // Header
    learning_progress: "Proses Pembelajaran",
    points: "mata",

    // Progress Bar
    progress_bar_slaying_it: "Anda memang gempak 🔥",
    progress_bar_almost_there: "Sikit lagi, legenda 🏁",

    // Avatar Selection
    avatar_select_title: "Pilih avatar comel!",
    avatar_select_subtitle: "Pilih wajah mesra untuk mewakili anda dalam sembang kami! ✨",

    // Badges
    badge_big_brain_name: "📘 Mod Otak Pintar!",
    badge_big_brain_tooltip: "Fuh, progress mantap! Otak awak memang power.",
    badge_ate_quiz_name: "🎯 Kuiz Settle 🔥",
    badge_ate_quiz_tooltip: "Habis kau tapau kuiz ni. Terbaik.",
    badge_certified_legend_name: "🏆 Legenda Sebenar ✨",
    badge_certified_legend_tooltip: "Pergh! Markah penuh?! Siapa genius sekarang ni 😎",
    
    // Toasts
    toast_q8_skipped: "Alamak! Anda langkau soalan 'final boss' 😅 — tiada kemenangan mutlak kali ini!",
    toast_copied: "Teks disalin ke papan keratan!",

    // Celebration Modal
    celebration_title: "Tahniah!",
    celebration_subtitle: "Anda telah menyelesaikan perjalanan pembelajaran ESG anda!",
    celebration_final_score: "Skor Akhir Anda",
    btn_close: "Tutup",

    // Decision Tree Nodes
    start_text: "Hai! 👋 Saya Capytron, panduan mesra anda untuk semua perkara ESG. Saya sangat teruja untuk berbual dengan anda. Sebagai permulaan, saya patut panggil anda apa?",
    collect_full_name_text: "Gembira bertemu dengan anda, **{userName}**! Untuk sijil yang akan kami keluarkan nanti, sila berikan nama penuh anda seperti yang anda mahu ia tertera.",
    collect_email_text: "Terima kasih! Dan apakah alamat e-mel anda? Sila semak semula, kerana kami akan menghantar sijil anda melalui e-mel.",
    collect_university_text: "Anda dari universiti mana?",
    greeting_text: "Baiklah, semua sudah sedia, **{userName}**! Jom kita mula dan belajar perkara-perkara hebat bersama. Pertama sekali... apa sebenarnya *ESG* tu?",
    what_is_esg_answer_text:
      "ESG = **Alam Sekitar, Sosial & Tadbir Urus.**\n\nIa adalah rangka kerja tentang cara kita menjaga planet 🌍, manusia 🤝, dan sistem 🏛️.",
    esg_breakdown_hub_text: "Pilihan yang bijak! Ini adalah teras ESG. Pilih satu tonggak untuk diterokai, atau teruskan apabila anda bersedia.",
    esg_breakdown_hub_revisit_text: "Faham! Apa lagi yang patut kita terokai di sini?",
    esg_breakdown_e_text: "🌿 **Alam Sekitar**\n\nIni semua tentang bagaimana sesebuah syarikat memberi kesan kepada planet.\n\n- Mengurangkan pelepasan karbon\n- Menjimatkan tenaga dan air\n- Mengurus sisa secara bertanggungjawab\n- Melindungi biodiversiti\n\nFikirkan: Bagaimanakah syarikat ini memerangi perubahan iklim atau melindungi sumber semula jadi?",
    esg_breakdown_s_text: "🤝 **Sosial**\n\nIni memberi tumpuan kepada cara syarikat melayan orang—di dalam dan di luar organisasi mereka.\n\n- Kesejahteraan dan kepelbagaian pekerja\n- Penglibatan komuniti\n- Hak asasi manusia dalam rantaian bekalan\n- Keselamatan produk dan pemasaran beretika\n\nFikirkan: Adakah anda akan berbangga untuk bekerja di sini atau membeli daripada mereka, mengetahui cara mereka melayan orang?",
    esg_breakdown_g_text: "✅ **Tadbir Urus**\n\nIni adalah tentang kepimpinan dan pembuatan keputusan yang beretika.\n\n- Pelaporan kewangan yang telus\n- Gaji eksekutif yang adil\n- Polisi anti-rasuah\n- Kepelbagaian dalam kepimpinan\n\nFikirkan: Adakah orang yang bertanggungjawab itu akauntabel, adil, dan bertindak demi kepentingan semua orang?",
    main_loop_text: "Apa lagi yang boleh saya tahu tentang ESG?",
    main_loop_revisit_text: "Bagus! Apa seterusnya dalam pengembaraan kita, {userName}? 🗺️",
    why_important_answer_text:
      "**ESG Ada Di Sekeliling Anda**\n\n- Udara bersih = Bernafas lebih baik\n- Sekolah inklusif = Peluang saksama untuk semua\n- Tadbir urus yang kukuh = Data anda selamat\n\nIa bukan hanya tentang iklim – Ia tentang keadilan, keselamatan, dan masa depan ANDA ✨.",
    more_importance_esg_text:
      "Mari kita terokai itu. Apa yang anda ingin tahu?",
    more_importance_esg_revisit_text: "Ada lagi mengenai topik ini?",
    more_importance_esg_revisit_text_matter_as_student: "Sangat mendalam! Bagaimana jika kita terokai pula **mengapa ia penting bagi anda sebagai pelajar**?",
    more_importance_esg_revisit_text_personal_esg: "Sangat mendalam! Bagaimana jika kita terokai pula **jika wujudnya ESG untuk individu**?",
    all_subtopics_done_prompt: "Kita sudah bincangkan beberapa perkara penting di sini. Mari kembali ke topik utama untuk meneruskan penjelajahan kita!",

    matter_as_student_answer_text:
      "**Gambaran Besar: Masa Depan Yang Anda Bina**\n\n- **E** = Langit cerah, air bersih, iklim yang stabil 🌡️ (Tiada lagi banjir di asrama!)\n- **S** = Peluang saksama untuk semua orang – di kampus & di tempat kerja 💼\n- **G** = Aplikasi & syarikat yang menghormati privasi anda 🔒\n\nInilah dunia yang anda sedang bentuk – satu pilihan pada satu masa. 🎯",
    
    personal_esg_intro_text: "Anda sudah tahu ESG bermaksud Alam Sekitar, Sosial, dan Tadbir Urus — satu rangka kerja untuk membuat pilihan yang bertanggungjawab yang melindungi planet, manusia, dan nilai-nilai etika.\n\nTetapi ini kelainan yang kebanyakan pelajar tidak fikirkan: ESG bukan hanya tentang bagaimana syarikat berkelakuan. Ia juga boleh menjadi amalan hidup peribadi. Dan ya — itu termasuklah sesuatu yang 'dewasa' seperti insurans.",
    personal_esg_tool_explanation_text: "ESG untuk individu bermakna membuat pilihan hari ini yang melindungi anda, komuniti anda, dan diri anda pada masa hadapan.\n\n**Alam Sekitar** 🌱 – Bagaimana tabiat dan pembelian anda mempengaruhi planet?\n**Sosial** 🤝 – Bagaimana anda menyokong kesejahteraan orang lain?\n**Tadbir Urus** 📊 – Bagaimana anda mengurus sumber, risiko, dan tanggungjawab anda?\n\nYang terakhir itu—Tadbir Urus—di situlah insurans memainkan peranan. Ia adalah perisai risiko peribadi anda, membantu anda terus menyumbang kepada kebaikan alam sekitar dan sosial tanpa dugaan hidup menjejaskan anda.\nSama seperti syarikat yang menjamin masa depan dengan polisi ESG, anda boleh menjamin masa depan hidup anda melalui perancangan yang bertanggungjawab.",
    personal_esg_pillars_hub_text: "Bayangkan anda berumur 26 tahun, baru memulakan kerjaya dan mengamalkan nilai-nilai ESG anda—mengambil pengangkutan awam, membeli jenama beretika, menjadi sukarelawan.\n\nKemudian kecemasan perubatan melanda.\n\n- **Tanpa insurans:** simpanan habis, ibu bapa terpaksa membantu, kebebasan terjejas.\n- **Dengan insurans:** anda pulih dan terus berada di landasan matlamat anda—tanpa menjejaskan nilai-nilai anda.\n\nAnda mahu lihat bagaimana ini berkaitan dengan ESG? Pilih satu tonggak untuk diterokai.",
    personal_esg_pillars_hub_revisit_text: "Pandangan yang hebat. Tonggak mana lagi yang patut kita terokai?",
    personal_esg_pillar_e_answer_text: "RHB Insurance melabur dengan tujuan—membiayai tenaga boleh diperbaharui, bon hijau, dan syarikat beretika dan bukannya industri pencemaran tinggi.\n\nDengan memilih syarikat yang mementingkan ESG, premium anda bukan sahaja melindungi anda—ia juga membantu memacu kemajuan alam sekitar dan sosial.",
    personal_esg_pillar_s_answer_text: "Jika sesuatu berlaku, RHB Insurance meringankan beban kewangan keluarga anda.\n\nSebahagian polisi kami juga menyalurkan sebahagian daripada premium anda ke dalam program kesihatan komuniti, bantuan bencana, dan tujuan amal—menjadikan jaring keselamatan peribadi anda sebagai kuasa untuk kebaikan sosial.",
    personal_esg_pillar_g_answer_text: "Sama seperti syarikat menguruskan risiko untuk kekal mampan, anda boleh menguruskan risiko anda sendiri.\n\nInsurans RHB—sama ada kesihatan, hayat, atau penyakit kritikal—melindungi anda daripada satu peristiwa tidak dijangka yang boleh menghabiskan kewangan anda.\n\nKeselamatan itu bermakna anda boleh terus memberi impak positif, mengamalkan nilai ESG anda, dan fokus pada matlamat anda dan bukannya terjerumus ke dalam mod kelangsungan hidup.",
    
    what_can_i_do_answer_text:
      "ESG dalam Dunia Sebenar: Cara Mengamalkannya 🌱\n\n💡 Ini bukan tentang kesempurnaan — hanya pertukaran kecil yang konsisten.\n\n**1️⃣ Belajar Secara Ringkas & Santai 📚**\n- Tonton YouTube 10 minit tentang iklim atau perniagaan beretika dan bukannya 'doomscrolling'.\n- Ikuti 3 pencipta kandungan ESG atau kelestarian di TikTok/IG supaya suapan anda bermanfaat.\n- Dengar podcast kelestarian semasa berulang-alik, berjalan, atau membuat kerja rumah.\n\n**2️⃣ Jadi Pengguna Yang Ingin Tahu 🌏**\n- Semak sama ada pembungkusan snek anda boleh dikitar semula atau dari sumber beretika.\n- Lihat halaman kelestarian jenama kegemaran anda — lihat sama ada mereka mengotakan janji.\n- Bandingkan kedai kopi: siapa yang 'fair-trade' atau menyokong petani tempatan?\n\n**3️⃣ Bina Kemahiran Melalui Penglibatan 💡**\n- Jadi sukarelawan di satu acara hijau atau komuniti setiap semester.\n- Tambah sudut kelestarian dalam projek kumpulan (digital sahaja, penjejakan karbon).\n- Bantu kelab anda menjadi mesra alam — cawan boleh guna semula, kongsi kenderaan, kurangkan sisa.\n\n**4️⃣ Membeli-belah & Makan Dengan Impak 🛒**\n- Bertukar pakaian dengan rakan atau beli barangan terpakai dan bukannya membeli yang baharu.\n- Bawa botol air atau cawan kopi sendiri — diskaun adalah bonus.\n- Cuba satu hidangan tanpa daging sehari untuk mengurangkan jejak karbon anda.\n\n**5️⃣ Gabungkan ESG dalam Pengajian 🎓**\n- Pilih tajuk esei yang meneroka ESG dalam bidang anda.\n- Cadangkan lawatan sambil belajar yang hijau (bangunan eko, perusahaan sosial).\n- Mulakan \"Sudut Hijau\" dalam sembang kumpulan kelas anda untuk berkongsi penemuan menarik.",
    what_else_student_prompt_text:
      "Beri saya satu contoh tindakan kecil mesra ESG lain yang boleh anda ambil di kampus.",

    relevance_intro_text: "Berikut ialah beberapa bidang di mana pemahaman yang kukuh tentang ESG amat bermanfaat untuk masa depan dewasa anda:",
    relevance_hub_text: "Bidang manakah yang anda ingin tahu dahulu?",
    relevance_hub_revisit_text: "Maklumat yang hebat. Apa lagi dalam senarai anda?",
    relevance_career_answer_text: "**Pilihan kerjaya anda:**\n\nESG bukan lagi sekadar “kemahiran bonus”—ia satu kemestian dalam pengambilan pekerja. Nama-nama besar seperti Google, Tesla, dan Unilever mahukan graduan yang berfikir jangka panjang, bukan hanya keuntungan cepat.\n\nKetahui ESG, dan anda akan menonjol—sama ada mencadangkan idea hijau, mengurus rantaian bekalan beretika, atau menjadikan tempat kerja lebih inklusif. Banyak program siswazah kini mempunyai landasan kelestarian yang boleh mempercepatkan anda ke jawatan kepimpinan.\n\n**Mengapa ia penting?**\nBanyak majikan terkemuka kini menjangkakan bakal pekerja memahami ESG. Ia menjadi kemahiran teras merentasi industri.",
    relevance_consumer_answer_text: "**Kuasa anda sebagai pengguna:**\n\nSetiap pembelian = undian untuk dunia yang anda inginkan.\nSokong jenama yang melayan orang dengan betul dan mesra alam. Media sosial boleh mengubah keadaan dengan cepat—boikot dan siaran tular telah memaksa jenama besar untuk memperbaiki diri.\n\n**Contoh:** Pada 2023, Shein menerbangkan pempengaruh ke sebuah kilang yang diatur supaya mereka menyiarkan “pekerja gembira…” Ia menjadi bumerang—media sosial serta-merta menggelarnya propaganda.\n\n**Mengapa ia penting?**\nTabiat membeli-belah anda mempengaruhi syarikat mana yang maju.",
    relevance_community_answer_text: "**Planet dan Komuniti Anda:**\n\nPerubahan iklim, ketidaksamaan, dan tadbir urus yang buruk bukanlah “masalah masa depan”—ia sedang membentuk dunia anda sekarang.\nMenjelang 2050, anda akan menjadi pemimpin yang menyelesaikan masalah hari ini.\n\nESG membantu anda berjuang untuk udara bersih, pekerjaan yang adil, dan kepimpinan beretika—dan meminta syarikat bertanggungjawab atas apa yang mereka lakukan kepada komuniti anda.\n\n**Mengapa ia penting?**\nAnda mewarisi hasil keputusan korporat hari ini.",

    career_opportunities_answer_text:
      "**Kemahiran ESG = Kuasa Hebat Kerjaya Anda!** 🦸\n\n**Pekerjaan Baru Popular** 🔥\n- Perunding Kelestarian\n- Penganalisis Data ESG\n- Pakar Risiko Iklim\n- Pengurus Kepelbagaian & Keterangkuman\n\n**Tingkatkan Sebarang Pekerjaan** ✨\n- Akauntan? Audit jejak karbon.\n- Pemasar? Kenal pasti 'greenwashing' & promosikan impak sebenar.\n- Aktuari? Model risiko iklim & sosial.",
    career_next_steps_text: "Bagaimana anda ingin meneruskan?",
    how_to_learn_answer_text:
      "**Mulakan Perjalanan ESG Anda SEKARANG:**\n- Ambil kursus ESG percuma dalam talian (banyak yang ada!) 💻\n- Sertai kelab kelestarian di kampus 🌱\n- Ikuti pemimpin & topik ESG di LinkedIn 🔗",
    degree_major_prompt_text:
      "Saya boleh bantu dengan itu. Apakah bidang ijazah anda?",
    ask_more_major_prompt_text: "Sudah tentu! Apa lagi yang anda fikirkan mengenai jurusan anda dan ESG?",
    do_i_matter_answer_text:
      "**Anda Penting. Lebih Daripada Yang Anda Sangka.**\n\nSetiap perubahan besar bermula dengan seorang yang melakukan sesuatu yang berbeza.\n\n- Anda membawa cawan boleh guna semula → Rakan meniru anda → Kafe menawarkan diskaun → Ribuan cawan diselamatkan! ☕\n- Anda tidak berkongsi berita palsu → Perbualan kumpulan menjadi lebih bijak → Anda menentang maklumat salah! 🧠\n\nPilihan anda bukan sahaja memberi kesan – ia memberi inspirasi kepada orang lain. Anda lebih berkuasa daripada yang anda sedari.",
    digital_habits_answer_text:
      "**Kehidupan Digital Anda = Impak BESAR ESG** 💻\n\n- **E**: Internet bukan sihir! Setiap carian, penstriman, & klik menggunakan banyak tenaga. \n  *Petua: Strim dalam SD, bukan HD, untuk jimat kuasa!* 💡\n- **S**: Siapa yang anda 'suka' & kongsi membentuk komuniti dalam talian. \n  *Kongsi dengan bertanggungjawab & laporkan kebencian – bina dunia digital yang lebih baik!* ❤️\n- **G**: Iklan sasaran yang menyeramkan? Itu tadbir urus data. \n  *Lindungi data anda: kata laluan yang kuat & fikir sebelum berkongsi!* 🔐\n\nKewarganegaraan digital anda = ESG dalam tindakan. Nak lihat betapa besar impak tabiat dalam talian anda terhadap alam sekitar?",
    learning_complete_prompt_quiz_text:
      "Terima kasih kerana berbual tentang ESG dengan kami!! Harap anda belajar sesuatu yang baru, {userName}. Untuk menguji pengetahuan anda, mahu cuba kuiz ringkas?\n\n**Perhatian:** Anda perlu melengkapkan kuiz untuk menuntut sijil anda!",
    ask_more_esg_prompt_text: "Sudah tentu, saya di sini untuk membantu. Apa yang ingin anda ketahui tentang ESG?",
    
    // Quiz
    quiz_q1_text_dd: "Soalan 1: Seret label tonggak (E, S, atau G) untuk dipadankan dengan definisinya.",
    dd_label_E: "E",
    dd_label_S: "S",
    dd_label_G: "G",
    dd_item_E: "Tenaga bersih, pengurangan sisa, dan pemuliharaan sumber.",
    dd_item_S: "Amalan buruh yang adil, hubungan komuniti, dan kepelbagaian.",
    dd_item_G: "Kepimpinan beretika, ketelusan, dan hak pemegang saham.",

    quiz_q1_correct_text: "Betul! Anda telah memadankan kesemuanya dengan sempurna.",
    quiz_q1_incorrect_text: "Tidak tepat. Padanan yang betul ialah: **E** untuk Alam Sekitar (seperti tenaga bersih), **S** untuk Sosial (seperti amalan adil), dan **G** untuk Tadbir Urus (seperti kepimpinan beretika). Jom teruskan!",
    
    quiz_q2_text:
      "Soalan 2: Antara berikut, yang manakah BUKAN kerjaya berkaitan ESG?",
    quiz_q2_correct_text:
      "Tepat sekali! Walaupun penting, pengkritik makanan bukanlah peranan teras ESG.",
    quiz_q2_incorrect_text: "Itu tidak betul. Jawapan yang betul ialah **Pengkritik Makanan**. Walaupun Pengurus Kepelbagaian dan Pakar Iklim adalah peranan teras ESG, kerja pengkritik makanan tidak berkaitan secara langsung dengan prinsip ESG.",
      
    quiz_q3_text:
      "Soalan 3: Antara tabiat digital berikut, yang manakah dapat mengurangkan kesan alam sekitar?",
    quiz_q3_correct_text:
      "Betul! Menstrim dalam SD berbanding HD menggunakan data dan tenaga yang jauh lebih sedikit.",
    quiz_q3_incorrect_text: "Cubaan yang baik, tetapi jawapan terbaik ialah **menstrim dalam SD**. Membiarkan komputer anda hidup dan sentiasa menggunakan storan awan kedua-duanya menggunakan tenaga yang banyak. Menstrim dalam Definisi Standard adalah cara mudah untuk mengurangkan penggunaan data dan tenaga.",

    quiz_q4_text:
      "Soalan 4: Berdasarkan bahagian 'ESG dalam Kehidupan Seharian', yang manakah contoh tindakan 'Tadbir Urus (G)'?",
    quiz_q4_correct_text:
      "Sempurna! Memetik sumber adalah satu tindakan integriti akademik, yang merupakan prinsip teras Tadbir Urus.",
    quiz_q4_incorrect_text: "Hampir tepat! Jawapan yang betul ialah **memetik sumber dengan betul**. Ini adalah tindakan integriti dan ketelusan, yang merupakan prinsip utama 'Tadbir Urus'. Pilihan lain tergolong di bawah 'Alam Sekitar' dan 'Sosial'.",

    quiz_q5_text:
      "Soalan 5: Dalam bahagian 'Adakah tindakan saya penting?', apakah 'kesan riak' daripada membawa cawan kopi boleh guna semula?",
    quiz_q5_correct_text:
      "Itu yang betul! Tindakan anda memberi inspirasi kepada rantaian peristiwa yang lebih luas.",
    quiz_q5_incorrect_text: "Hampir tepat, tetapi 'kesan riak' yang diterangkan adalah tentang bagaimana **tindakan anda memberi inspirasi kepada orang lain dan membawa kepada perubahan yang lebih besar**. Ia bukan hanya tentang faedah peribadi, tetapi tentang mewujudkan rantaian reaksi yang positif.",

    quiz_q6_prompt_text:
      "Soalan 6 (Terbuka): Sejauh manakah anda penting dalam menyelamatkan Bumi kita?",
    quiz_q7_prompt_text:
      "Soalan 7 (Terbuka): Apakah satu tindakan yang akan anda ambil untuk meningkatkan impak ESG anda?",
    quiz_q8_text: "Soalan Terakhir: Cari 7 perkataan kelestarian yang tersembunyi dalam grid! Apabila anda menjumpai satu perkataan, saya akan beritahu maksudnya. 🕵️‍♀️",

    quiz_end_text:
      "Kuiz selesai! Anda mendapat **{quizCorrectAnswers} daripada 8** soalan dengan betul. Skor akhir anda ialah **{score} daripada 1000 mata**!\n\n🌍 **Fakta ESG Menarik:** Interaksi anda menghasilkan kira-kira **{co2}g CO₂**. Itu bersamaan dengan menghidupkan penghawa dingin selama **{acMinutes} minit** atau memandu kereta sejauh **{carKm} km**!\n\n{aiReminder}",
    final_thanks_no_quiz_text:
      "Tidak mengapa, {userName}! Skor akhir anda ialah **{score} daripada 1000 mata**. Terima kasih kerana belajar bersama saya hari ini. ✨\n\n🌍 **Fakta ESG Menarik:** Interaksi anda menghasilkan kira-kira **{co2}g CO₂**. Itu bersamaan dengan menghidupkan penghawa dingin selama **{acMinutes} minit** atau memandu kereta sejauh **{carKm} km**!\n\n{aiReminder}",
    certificate_sent_text: "✅ Sijil anda akan dihantar ke e-mel anda dalam masa 2–3 minit.",
    form_submission_error_text: "Maaf, terdapat ralat semasa menghantar maklumat anda. Sila cuba klik butang itu sekali lagi.",
    end_curriculum_text: "Terima kasih kerana belajar dengan saya! Seronok berbual dengan anda. Sila mulakan semula bila-bila masa. Selamat tinggal! 👋",
    share_prompt_text: "Hebat! Ini siaran yang boleh anda kongsi untuk meraikan pencapaian anda.",
    linkedin_share_text: "Saya baru sahaja melengkapkan Panduan Pelajar ESG oleh RHB, dengan skor {score} daripada 1000 mata, dan memperoleh sijil tamat! Ia cara interaktif yang hebat untuk belajar tentang prinsip Alam Sekitar, Sosial, dan Tadbir Urus. #ESG #Kelestarian #RHBCares #RHBInsurance",
    
    // Buttons
    btn_what_is_esg: "Apakah itu ESG?",
    btn_what_else_esg: "Faham! Apa seterusnya?",
    btn_esg_breakdown: "Beri saya pecahan ringkas konsep ESG.",
    btn_explore_e: "🌿 E: Alam Sekitar",
    btn_explore_s: "🤝 S: Sosial",
    btn_explore_g: "✅ G: Tadbir Urus",
    btn_continue_to_main_topics: "Semua jelas, jom teruskan!",
    btn_back_to_breakdown: "Saya mahu lihat tonggak lain",
    btn_why_important: "Mengapa ESG penting?",
    btn_what_can_i_do: "Apa yang boleh saya lakukan sebagai pelajar?",
    btn_how_relevant: "Bagaimana ini relevan dengan masa depan saya?",
    btn_do_i_matter: "Adakah tindakan saya benar-benar penting?",
    btn_more_on_importance: "Lebih lanjut mengenai kepentingan ESG",
    btn_matter_as_student: "Mengapa ia penting bagi saya sebagai pelajar?",
    btn_personal_esg: "Adakah ESG untuk individu wujud?",
    btn_how_insurance_is_tool: "Bagaimana Insurans Menjadi Alat ESG Peribadi?",
    btn_how_fits_long_game: "Bagaimana ini sesuai dengan 'perancangan jangka panjang'?",
    btn_personal_pillar_e: "Alam Sekitar: Memilih syarikat insurans sejajar ESG",
    btn_personal_pillar_s: "Sosial: Menyokong komuniti anda",
    btn_personal_pillar_g: "Tadbir Urus: Melindungi kestabilan kewangan anda",
    btn_explore_other_pillars: "Saya mahu terokai lagi.",
    btn_makes_sense: "Itu munasabah!",
    btn_yes_go_back: "Ya, jom kembali.",
    btn_what_else_you_can_do: "Apa lagi yang boleh saya lakukan?",
    btn_understood: "Faham!",
    btn_show_me_areas: "Jom teroka!",
    btn_relevance_career: "🚀 Pilihan kerjaya anda",
    btn_relevance_consumer: "🛒 Kuasa anda sebagai pengguna",
    btn_relevance_community: "🌍 Planet dan Komuniti anda",
    btn_explore_other_relevance: "Saya mahu terokai bidang lain",
    btn_continue_to_career_opps: "Faham. Jadi apa peluang kerjaya itu?",
    btn_career_opportunities: "Bagaimana dengan peluang kerjaya?",
    btn_tell_me_more: "Menarik! Beritahu saya lebih lanjut.",
    btn_how_to_learn: "Bagaimana saya boleh belajar kemahiran tersebut?",
    btn_what_is_your_major: "Apa yang boleh saya lakukan berkenaan ESG dalam bidang pengajian saya?",
    btn_check_out: "Baiklah, saya akan lihat.",
    btn_very_cool: "Sangat menarik!",
    btn_thanks_clear: "Terima kasih, itu jelas!",
    btn_ask_more_major: "Saya ada soalan lain tentang ini.",
    btn_ask_about_other_majors: "Saya ingin bertanya tentang jurusan lain juga.",
    btn_got_it_thanks: "Faham, terima kasih!",
    btn_digital_habits: "Bagaimana tabiat digital saya mempengaruhi ESG?",
    btn_watch_video: "Tonton Video Pantas!",
    btn_empowering: "Ia memberdayakan!",
    btn_back_to_main_topics: "Jom kembali ke topik utama.",
    btn_take_quiz: "Jom cuba kuiz ringkas!!",
    btn_no_quiz: "Tidak, terima kasih.",
    btn_ask_more_esg: "Saya ada soalan dahulu...",
    btn_back_to_quiz_prompt: "Baiklah, saya sudah bersedia.",
    btn_next_question: "Soalan Seterusnya!",
    btn_final_question: "Soalan Terakhir!",
    btn_not_esg_career_1: "Pengkritik Makanan",
    btn_not_esg_career_2: "Pengurus Kepelbagaian & Keterangkuman",
    btn_not_esg_career_3: "Pakar Risiko Iklim",
    btn_digital_habit_1: "Menstrim video dalam Definisi Standard (SD)",
    btn_digital_habit_2: "Membiarkan komputer anda hidup 24/7",
    btn_digital_habit_3: "Sentiasa menggunakan storan awan untuk semua fail",
    btn_governance_action_1: "Membawa botol air boleh guna semula",
    btn_governance_action_2: "Memetik sumber dengan betul dalam kerja anda",
    btn_governance_action_3: "Berkongsi siaran perniagaan tempatan di media sosial",
    btn_ripple_effect_1: "Ia menjimatkan sedikit wang anda",
    btn_ripple_effect_2:
      "Ia memberi inspirasi kepada rakan-rakan untuk melakukan perkara yang sama dan menggalakkan kafe untuk menawarkan diskaun",
    btn_ripple_effect_3:
      "Ia hanyalah satu isyarat simbolik tanpa impak sebenar",
    btn_see_results: "Lihat keputusan saya!",
    btn_continue: "Teruskan",
    btn_claim_certificate: "Tuntut Sijil Anda",
    btn_share_score: "Kongsi Skor Saya",
    btn_share_linkedin: "Kongsi di LinkedIn",
    btn_copy_text: "Salin Teks Siaran",
    btn_open_linkedin: "Buka LinkedIn & Tampal",
    btn_back_to_final_options: "Kembali ke Pilihan Akhir",
    btn_start_over: "Mula Semula",
    btn_end_curriculum: "Tamatkan Sesi",
    btn_check_answer: "Semak Jawapan",
    btn_finish_quiz: "Selesaikan Kuiz",
    'All items placed!': 'Semua item telah diletakkan!',
    'Drop here': 'Letak di sini',
    'Type your answer here...': 'Taip jawapan anda di sini...',
    'toggle_language_to_ms': 'Tukar ke Bahasa Malaysia',
    'toggle_language_to_en': 'Tukar ke Bahasa Inggeris',
    btn_skip_question: "Langkau Soalan",
    'word_definition_title': 'Kosa Kata Terbuka!',

    // Word Search Words & Definitions
    'word_recycle': "KITAR SEMULA",
    'def_recycle': "Untuk menukar sisa menjadi bahan yang boleh diguna semula.",
    'ex_recycle': "Contoh: Kami mengitar semula botol plastik untuk membuat produk baharu.",
    'word_compost': "KOMPOS",
    'def_compost': "Bahan organik reput yang digunakan sebagai baja.",
    'ex_compost': "Contoh: Dia menambah kulit buah ke dalam tong komposnya.",
    'word_renewable': "BOLEH DIPERBAHARUI",
    'def_renewable': "Sumber tenaga yang tidak habis apabila digunakan, seperti tenaga angin atau solar.",
    'ex_renewable': "Contoh: Panel solar adalah teknologi tenaga boleh diperbaharui yang utama.",
    'word_energy': "TENAGA",
    'def_energy': "Kekuatan dan daya hidup yang diperlukan untuk aktiviti fizikal atau mental yang berterusan.",
    'ex_energy': "Contoh: Menjimatkan tenaga dengan mematikan lampu adalah baik untuk alam sekitar.",
    'word_water': "AIR",
    'def_water': "Cecair tanpa warna, telus, tanpa bau yang membentuk laut, tasik, sungai, dan hujan.",
    'ex_water': "Contoh: Memulihara air adalah penting di iklim kering.",
    'word_future': "MASA DEPAN",
    'def_future': "Waktu atau tempoh masa selepas waktu bercakap atau menulis.",
    'ex_future': "Contoh: Tindakan kita hari ini akan menentukan masa depan planet kita.",
    'word_green': "HIJAU",
    'def_green': "Berkaitan dengan atau menyokong perlindungan alam sekitar.",
    'ex_green': "Contoh: Syarikat itu melancarkan inisiatif 'hijau' baharu untuk mengurangkan sisa.",
    'word_ethics': "ETIKA",
    'def_ethics': "Prinsip moral yang mengawal tingkah laku seseorang atau pengendalian sesuatu aktiviti.",
    'ex_ethics': "Contoh: Etika perniagaan yang kukuh adalah bahagian penting dalam tadbir urus yang baik.",
    'word_impact': "IMPAK",
    'def_impact': "Kesan atau pengaruh yang ketara.",
    'ex_impact': "Contoh: Perubahan kecil boleh memberi impak besar kepada jejak karbon anda.",
    'word_carbon': "KARBON",
    'def_carbon': "Berkaitan dengan pelepasan karbon dioksida, sering digunakan dalam konteks 'jejak karbon'.",
    'ex_carbon': "Contoh: Berbasikal dan bukannya memandu membantu mengurangkan pelepasan karbon anda.",
    'word_social': "SOSIAL",
    'def_social': "Berkaitan dengan masyarakat atau organisasinya, dan kesejahteraan manusia sebagai ahlinya.",
    'ex_social': "Contoh: Gaji yang adil dan keadaan kerja yang selamat adalah isu sosial yang penting.",
    'word_sustain': "LESTARI",
    'def_sustain': "Memperkuat atau menyokong secara fizikal atau mental; menyebabkan berterusan untuk tempoh yang panjang.",
    'ex_sustain': "Contoh: Kita perlu mencari jalan untuk melestarikan sumber planet kita untuk generasi akan datang."
  },
};
