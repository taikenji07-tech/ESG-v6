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

    // Celebration Modal
    celebration_title: "Congratulations!",
    celebration_subtitle: "You've completed your ESG learning journey!",
    celebration_final_score: "Your Final Score",
    btn_close: "Close",

    // Decision Tree Nodes
    start_text: "Hiii! 👋 I'm your super friendly guide to all things ESG! I'm so excited to chat with you. To start, what should I call you?",
    collect_full_name_text: "It's a pleasure to meet you, **{userName}**! For the certificate we'll issue at the end, please provide your full name as you'd like it to appear.",
    collect_email_text: "Thank you! And what's your email address? Please double-check it, as we'll send your certificate here.",
    collect_university_text: "Which university are you from?",
    greeting_text: "Awesome, we're all set, **{userName}**! Let's dive in and learn some amazing things together. First up... what even **is** ESG?",
    what_is_esg_answer_text:
      "ESG = **Environmental, Social & Governance.**\n\nIt’s a framework for how we care for the planet 🌍, people 🤝, and systems 🏛️.\n\n- **Environmental**: Clean energy, less waste\n- **Social**: Fairness, diversity, respect\n- **Governance**: Ethics, transparency, good leadership\n\nESG matters because what you do – what you buy, how you learn, how you treat others – helps shape the future.",
    main_loop_text: "What else about ESG can I know?",
    main_loop_revisit_text: "Great! What's next on our adventure, {userName}? 🗺️",
    why_important_answer_text:
      "**ESG Is All Around You**\n\n- Clean air = Breathe better\n- Inclusive schools = Fair chances for all\n- Strong governance = Your data stays safe\n\nIt’s not just about climate – It’s about fairness, safety, and YOUR future ✨.",
    more_importance_esg_text:
      "Let's explore that. What are you curious about?",
    more_importance_esg_revisit_text: "Anything else on this topic?",
    more_importance_esg_revisit_text_insurance_link: "That was insightful! How about we now explore **what this has to do with insurance**?",
    more_importance_esg_revisit_text_matter_as_student: "That was insightful! How about we now explore **why this matters to you as a student**?",
    all_subtopics_done_prompt: "We've covered some great points here. Let's head back to the main topics to continue our exploration!",

    matter_as_student_answer_text:
      "**The Big Picture: The Future You're Building**\n\n- **E** = Clear skies, clean water, stable climate 🌡️ (No more dorm floods!)\n- **S** = Fair chances for everyone – on campus & at work 💼\n- **G** = Apps & companies that respect your privacy 🔒\n\nThis is the world you're shaping – one choice at a time. 🎯",
    insurance_link_answer_text:
      "That's a great question! Think of it this way: ESG is like a global insurance policy for our planet and society. We all contribute to it with good actions.\n\nBut what about protecting **your** world, right now?\n\nThat's where personal insurance comes in. It's a key part of the 'Social' and 'Governance' aspects. Companies like RHB Insurance help provide that safety net for individuals.\n\nWant to see a quick demo of how it works for a student like you?",
    insurance_demo_prompt_text: "Awesome! Let's imagine a common student scenario. Which of these worries you more?",
    insurance_transport_answer_text: "Totally valid! Your transport is your lifeline. Imagine you get in an accident, or get your car damaged from floods. A good motor insurance plan, like one from RHB Insurance, could cover the repair or replacement. It turns a potential crisis (and a huge expense) into a manageable problem. This protects your finances and you. 🚗",
    insurance_sickness_answer_text: "A classic worry. A sudden fever or a sprained ankle from sports could mean a trip to the clinic and unexpected medical bills. A personal accident or medical plan from RHB Insurance helps cover those costs, so you can focus on getting better, not on your wallet. It's about ensuring you have access to care without financial stress. 🏥",
    insurance_summary_text: "So, in short: ESG is about protecting our collective future. RHB Insurance helps you protect your **personal** present. Both are about being prepared and creating security.\n\nReady to head back to the main topics?",
    
    what_can_i_do_answer_text:
      "**ESG in Everyday Life**\n\n**Environmental (E)**\n- 5-Minute Rule: Leaving for >5 mins? Turn off lights & unplug 🔌\n- Choose Tap: Bring a reusable bottle = less plastic + $ saved 💧\n\n**Social (S)**\n- Amplify Others: Share a friend's project or local biz post 👍\n- Be Welcoming: Say \"hey\" to someone sitting alone 👋\n\n**Governance (G)**\n- Cite Sources: Integrity = owning your work ✍️\n- Speak Up: See something wrong? Report it. That's leadership.",
    what_else_student_prompt_text:
      "Give me an example of another small ESG-friendly action you could take on campus.",
    how_relevant_answer_text:
      "**ESG: Not Just for Companies - It's for YOU**\n\n**Your Career**\n- Same degree, different edge: One knows about climate risks (E), diversity (S), & ethical data (G). The other doesn't.\n- ESG = You look smarter, more ready for today's world.\n\n**Your Life**\n- Clean parks. Fair systems. Less division.\n- ESG = A better world for the next 60+ years.\n- Care now = Winning later\n- ESG = An Investment in Future You 🚀",
    career_opportunities_answer_text:
      "**ESG Skills = Your Career Superpower!** 🦸\n\n**Hot New Jobs** 🔥\n- Sustainability Consultant\n- ESG Data Analyst\n- Climate Risk Specialist\n- Diversity & Inclusion Manager\n\n**Boost Any Job** ✨\n- Accountant? Audit carbon footprints.\n- Marketer? Spot greenwashing & promote real impact.\n- Actuary? Model climate & social risks.",
    career_next_steps_text: "How would you like to proceed?",
    how_to_learn_answer_text:
      "**Start Your ESG Journey NOW:**\n- Take a free ESG course online (so many out there!) 💻\n- Join a campus sustainability club 🌱\n- Follow ESG leaders & topics on LinkedIn 🔗",
    degree_major_prompt_text:
      "I can help with that. What is your degree major?",
    ask_more_major_prompt_text: "Of course! What else is on your mind regarding your major and ESG?",
    do_i_matter_answer_text:
      "**You Matter. More Than You Think.**\n\nEvery big change starts with one person doing something different.\n\n- You bring a reusable cup → Friend copies you → Cafe offers discounts → Thousands of cups saved! ☕\n- You skip sharing fake news → Group chat gets smarter → You fight misinformation! 🧠\n\nYour choices don't just add up - they inspire others. You're more powerful than you realize.",
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
    post_certificate_text: "Your details have been submitted successfully! Congratulations again. What would you like to do next?",
    form_submission_error_text: "I'm sorry, there was an error submitting your information. Please try clicking the button again.",
    end_curriculum_text: "Thanks for learning with me! It was great chatting with you. Feel free to start over any time. Goodbye! 👋",
    
    // Buttons
    btn_what_is_esg: "What is ESG?",
    btn_what_else_esg: "Got it! What's next?",
    btn_why_important: "Why is ESG important?",
    btn_what_can_i_do: "What can I do about ESG as a student?",
    btn_how_relevant: "How is this relevant to my future?",
    btn_do_i_matter: "Does what I do really matter?",
    btn_more_on_importance: "More on the importance of ESG",
    btn_matter_as_student: "Why does it matter to me as a student?",
    btn_insurance_link: "What does this have to do with insurance?",
    btn_makes_sense: "That makes sense!",
    btn_yes_show_demo: "Yes, show me a demo!",
    btn_i_get_it_continue: "I get it, let's continue.",
    btn_transport_scenario: "My car or motorbike getting damaged.",
    btn_sickness_scenario: "Getting sick or having an accident.",
    btn_continue_to_summary: "Continue with the summary",
    btn_explore_more: "Explore more!",
    btn_yes_go_back: "Yes, let's go back.",
    btn_what_else_you_can_do: "What else can I do?",
    btn_understood: "Understood!",
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
    btn_back_to_main_topics: "Back to main topics",
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

    // Celebration Modal
    celebration_title: "Tahniah!",
    celebration_subtitle: "Anda telah menyelesaikan perjalanan pembelajaran ESG anda!",
    celebration_final_score: "Skor Akhir Anda",
    btn_close: "Tutup",

    // Decision Tree Nodes
    start_text: "Hai! 👋 Saya panduan mesra anda untuk semua perkara ESG. Saya sangat teruja untuk berbual dengan anda. Sebagai permulaan, saya patut panggil anda apa?",
    collect_full_name_text: "Gembira bertemu dengan anda, **{userName}**! Untuk sijil yang akan kami keluarkan nanti, sila berikan nama penuh anda seperti yang anda mahu ia tertera.",
    collect_email_text: "Terima kasih! Dan apakah alamat e-mel anda? Sila semak semula, kerana kami akan menghantar sijil anda ke sini.",
    collect_university_text: "Anda dari universiti mana?",
    greeting_text: "Baiklah, semua sudah sedia, **{userName}**! Jom kita mula dan belajar perkara-perkara hebat bersama. Pertama sekali... apa sebenarnya *ESG* tu?",
    what_is_esg_answer_text:
      "ESG = **Alam Sekitar, Sosial & Tadbir Urus.**\n\nIa adalah rangka kerja tentang cara kita menjaga planet 🌍, manusia 🤝, dan sistem 🏛️.\n\n- **Alam Sekitar**: Tenaga bersih, kurangkan sisa\n- **Sosial**: Keadilan, kepelbagaian, hormat-menghormati\n- **Tadbir Urus**: Etika, ketelusan, kepimpinan yang baik\n\nESG penting kerana apa yang anda lakukan – apa yang anda beli, cara anda belajar, cara anda melayan orang lain – membantu membentuk masa depan.",
    main_loop_text: "Apa lagi yang boleh saya tahu tentang ESG?",
    main_loop_revisit_text: "Bagus! Apa seterusnya dalam pengembaraan kita, {userName}? 🗺️",
    why_important_answer_text:
      "**ESG Ada Di Sekeliling Anda**\n\n- Udara bersih = Bernafas lebih baik\n- Sekolah inklusif = Peluang saksama untuk semua\n- Tadbir urus yang kukuh = Data anda selamat\n\nIa bukan hanya tentang iklim – Ia tentang keadilan, keselamatan, dan masa depan ANDA ✨.",
    more_importance_esg_text:
      "Mari kita terokai itu. Apa yang anda ingin tahu?",
    more_importance_esg_revisit_text: "Ada lagi mengenai topik ini?",
    more_importance_esg_revisit_text_insurance_link: "Sangat mendalam! Bagaimana jika kita terokai pula **apa kaitannya dengan insurans**?",
    more_importance_esg_revisit_text_matter_as_student: "Sangat mendalam! Bagaimana jika kita terokai pula **mengapa ia penting bagi anda sebagai pelajar**?",
    all_subtopics_done_prompt: "Kita sudah bincangkan beberapa perkara penting di sini. Mari kembali ke topik utama untuk meneruskan penjelajahan kita!",

    matter_as_student_answer_text:
      "**Gambaran Besar: Masa Depan Yang Anda Bina**\n\n- **E** = Langit cerah, air bersih, iklim yang stabil 🌡️ (Tiada lagi banjir di asrama!)\n- **S** = Peluang saksama untuk semua orang – di kampus & di tempat kerja 💼\n- **G** = Aplikasi & syarikat yang menghormati privasi anda 🔒\n\nInilah dunia yang anda sedang bentuk – satu pilihan pada satu masa. 🎯",
    insurance_link_answer_text:
      "Soalan yang bagus! Fikirkannya begini: ESG adalah seperti polisi insurans global untuk planet dan masyarakat kita. Kita semua menyumbang kepadanya dengan tindakan yang baik.\n\nTetapi bagaimana pula dengan melindungi dunia **anda**, sekarang?\n\nDi situlah insurans peribadi masuk. Ia adalah bahagian penting dalam aspek 'Sosial' dan 'Tadbir Urus'. Syarikat seperti RHB Insurance membantu menyediakan jaringan keselamatan itu untuk individu.\n\nIngin melihat demo ringkas bagaimana ia berfungsi untuk pelajar seperti anda?",
    insurance_demo_prompt_text: "Hebat! Mari bayangkan senario biasa seorang pelajar. Antara kebimbangan ini, yang manakah lebih merisaukan anda?",
    insurance_transport_answer_text: "Sangat difahami! Pengangkutan anda adalah talian hayat anda. Bayangkan anda terlibat dalam kemalangan, atau kereta anda rosak akibat banjir. Pelan insurans motor yang baik, seperti dari RHB Insurance, boleh menanggung kos pembaikan atau penggantian. Ia mengubah krisis yang berpotensi (dan perbelanjaan besar) menjadi masalah yang boleh diurus. Ini melindungi kewangan dan diri anda. 🚗",
    insurance_sickness_answer_text: "Kebimbangan klasik. Demam secara tiba-tiba atau buku lali terseliuh akibat bersukan boleh bermakna lawatan ke klinik dan bil perubatan yang tidak dijangka. Pelan kemalangan peribadi atau perubatan dari RHB Insurance membantu menampung kos tersebut, jadi anda boleh fokus untuk sembuh, bukan pada dompet anda. Ia adalah tentang memastikan anda mempunyai akses kepada penjagaan tanpa tekanan kewangan. 🏥",
    insurance_summary_text: "Jadi, ringkasnya: ESG adalah tentang melindungi masa depan kolektif kita. RHB Insurance membantu melindungi masa kini **peribadi** anda. Kedua-duanya adalah tentang bersedia dan mewujudkan keselamatan.\n\nBersedia untuk kembali ke topik utama?",

    what_can_i_do_answer_text:
      "**ESG dalam Kehidupan Seharian**\n\n**Alam Sekitar (E)**\n- Peraturan 5 Minit: Keluar >5 minit? Padamkan lampu & cabut plag 🔌\n- Pilih Air Paip: Bawa botol boleh guna semula = kurang plastik + jimat wang 💧\n\n**Sosial (S)**\n- Sokong Orang Lain: Kongsi projek rakan atau siaran perniagaan tempatan 👍\n- Bersikap Mesra: Sapa \"hai\" kepada seseorang yang duduk bersendirian 👋\n\n**Tadbir Urus (G)**\n- Petik Sumber: Integriti = hargai hasil kerja anda ✍️\n- Bersuara: Nampak sesuatu yang salah? Laporkan. Itulah kepimpinan.",
    what_else_student_prompt_text:
      "Beri saya satu contoh tindakan kecil mesra ESG lain yang boleh anda ambil di kampus.",
    how_relevant_answer_text:
      "**ESG: Bukan Hanya Untuk Syarikat - Ia Untuk ANDA**\n\n**Kerjaya Anda**\n- Ijazah yang sama, kelebihan berbeza: Seorang tahu tentang risiko iklim (E), kepelbagaian (S), & data beretika (G). Yang seorang lagi tidak.\n- ESG = Anda kelihatan lebih bijak, lebih bersedia untuk dunia hari ini.\n\n**Kehidupan Anda**\n- Taman yang bersih. Sistem yang adil. Kurang perpecahan.\n- ESG = Dunia yang lebih baik untuk 60+ tahun akan datang.\n- Peduli sekarang = Menang kemudian\n- ESG = Pelaburan untuk Masa Depan Anda 🚀",
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
    post_certificate_text: "Maklumat anda telah berjaya dihantar! Tahniah sekali lagi. Apa yang anda ingin lakukan seterusnya?",
    form_submission_error_text: "Maaf, terdapat ralat semasa menghantar maklumat anda. Sila cuba klik butang itu sekali lagi.",
    end_curriculum_text: "Terima kasih kerana belajar dengan saya! Seronok berbual dengan anda. Sila mulakan semula bila-bila masa. Selamat tinggal! 👋",
    
    // Buttons
    btn_what_is_esg: "Apakah itu ESG?",
    btn_what_else_esg: "Faham! Apa seterusnya?",
    btn_why_important: "Mengapa ESG penting?",
    btn_what_can_i_do: "Apa yang boleh saya lakukan sebagai pelajar?",
    btn_how_relevant: "Bagaimana ini relevan dengan masa depan saya?",
    btn_do_i_matter: "Adakah tindakan saya benar-benar penting?",
    btn_more_on_importance: "Lebih lanjut mengenai kepentingan ESG",
    btn_matter_as_student: "Mengapa ia penting bagi saya sebagai pelajar?",
    btn_insurance_link: "Apa kaitannya dengan insurans?",
    btn_makes_sense: "Itu munasabah!",
    btn_yes_show_demo: "Ya, tunjukkan saya demo!",
    btn_i_get_it_continue: "Saya faham, jom teruskan.",
    btn_transport_scenario: "Kereta atau motosikal saya rosak.",
    btn_sickness_scenario: "Jatuh sakit atau mengalami kemalangan.",
    btn_continue_to_summary: "Teruskan dengan ringkasan",
    btn_explore_more: "Terokai lebih lanjut",
    btn_yes_go_back: "Ya, jom kembali.",
    btn_what_else_you_can_do: "Apa lagi yang boleh saya lakukan?",
    btn_understood: "Faham!",
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
    btn_back_to_main_topics: "Kembali ke topik utama",
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
