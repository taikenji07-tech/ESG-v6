
import type { DecisionTree, Badge, WordSearchPoolItem, DragDropQuizNode, WordSearchQuizNode } from './types';

export const BADGES: Badge[] = [
    { id: 'knowledge', nameKey: 'badge_big_brain_name', descriptionKey: 'badge_unlocked_desc', tooltipKey: 'badge_big_brain_tooltip', score: 200, icon: 'knowledge' },
    { id: 'master', nameKey: 'badge_ate_quiz_name', descriptionKey: 'badge_unlocked_desc', tooltipKey: 'badge_ate_quiz_tooltip', score: 600, icon: 'master' },
    { id: 'flawless', nameKey: 'badge_certified_legend_name', descriptionKey: 'badge_unlocked_desc', tooltipKey: 'badge_certified_legend_tooltip', score: 1000, icon: 'flawless' },
];

export const WORD_SEARCH_POOL: WordSearchPoolItem[] = [
    { wordKey: 'word_recycle', definitionKey: 'def_recycle', exampleKey: 'ex_recycle' },
    { wordKey: 'word_compost', definitionKey: 'def_compost', exampleKey: 'ex_compost' },
    { wordKey: 'word_renewable', definitionKey: 'def_renewable', exampleKey: 'ex_renewable' },
    { wordKey: 'word_energy', definitionKey: 'def_energy', exampleKey: 'ex_energy' },
    { wordKey: 'word_water', definitionKey: 'def_water', exampleKey: 'ex_water' },
    { wordKey: 'word_future', definitionKey: 'def_future', exampleKey: 'ex_future' },
    { wordKey: 'word_green', definitionKey: 'def_green', exampleKey: 'ex_green' },
    { wordKey: 'word_ethics', definitionKey: 'def_ethics', exampleKey: 'ex_ethics' },
    { wordKey: 'word_impact', definitionKey: 'def_impact', exampleKey: 'ex_impact' },
    { wordKey: 'word_carbon', definitionKey: 'def_carbon', exampleKey: 'ex_carbon' },
    { wordKey: 'word_social', definitionKey: 'def_social', exampleKey: 'ex_social' },
    { wordKey: 'word_sustain', definitionKey: 'def_sustain', exampleKey: 'ex_sustain' },
];

export const quizOrder = ['quiz_q1', 'quiz_q2', 'quiz_q3', 'quiz_q4', 'quiz_q5', 'quiz_q6_prompt', 'quiz_q7_prompt', 'quiz_q8'];

export const progressNodes = new Set([
  'start',
  'collect_full_name',
  'collect_email',
  'collect_phone_number',
  'collect_university',
  'greeting',
  'what_is_esg_answer',
  'esg_breakdown_hub',
  'esg_breakdown_e',
  'esg_breakdown_s',
  'esg_breakdown_g',
  'main_loop',
  'why_important_answer',
  'more_importance_esg',
  'matter_as_student_answer',
  'what_can_i_do_answer',
  'what_else_student_prompt',
  'what_else_response',
  'how_relevant_answer',
  'relevance_hub',
  'relevance_career_answer',
  'relevance_consumer_answer',
  'relevance_community_answer',
  'career_opportunities_answer',
  'career_next_steps',
  'how_to_learn_answer',
  'degree_major_prompt',
  'degree_major_response',
  'do_i_matter_answer',
  'digital_habits_answer',
  'learning_complete_prompt_quiz',
  'personal_esg_intro',
  'personal_esg_tool_explanation',
  'personal_esg_pillars_hub',
  'personal_esg_pillar_e_answer',
  'personal_esg_pillar_s_answer',
  'personal_esg_pillar_g_answer',
  'anything_else_hub',
  'anything_else_not_just_environmental',
  'anything_else_measurable',
  'anything_else_career_currency',
  'anything_else_long_term',
  'anything_else_small_move',
]);

export const totalProgressSteps = progressNodes.size;

export const decisionTree: DecisionTree = {
    'start': {
        text: "start_text",
        type: 'PROMPT',
        nextNode: 'collect_full_name',
    },
    'collect_full_name': {
        text: "collect_full_name_text",
        type: 'PROMPT',
        nextNode: 'collect_email',
    },
    'collect_email': {
        text: "collect_email_text",
        type: 'PROMPT',
        nextNode: 'collect_phone_number',
    },
    'collect_phone_number': {
        text: "collect_phone_number_text",
        type: 'PROMPT',
        nextNode: 'collect_university',
    },
    'collect_university': {
        text: "collect_university_text",
        type: 'PROMPT',
        nextNode: 'greeting',
    },
    'greeting': {
        text: "greeting_text",
        type: 'QUESTION',
        buttons: [ { text: "btn_what_is_esg", nextNode: 'what_is_esg_answer' } ]
    },
    'what_is_esg_answer': {
        text: "what_is_esg_answer_text",
        type: 'ANSWER',
        buttons: [ 
            { text: "btn_esg_breakdown", nextNode: 'esg_breakdown_hub' },
            { text: "btn_what_else_esg", nextNode: 'main_loop' } 
        ]
    },
    'esg_breakdown_hub': {
        text: 'esg_breakdown_hub_text',
        type: 'LOOP_QUESTION',
        parentLoop: 'main_loop', // Technically it's a sub-loop, but this works
        nextNode: 'main_loop',
        branches: {
            'explore_e': { text: 'btn_explore_e', nextNode: 'esg_breakdown_e' },
            'explore_s': { text: 'btn_explore_s', nextNode: 'esg_breakdown_s' },
            'explore_g': { text: 'btn_explore_g', nextNode: 'esg_breakdown_g' },
        },
    },
    'esg_breakdown_e': {
        text: 'esg_breakdown_e_text',
        type: 'ANSWER',
        buttons: [ 
            { text: 'btn_back_to_breakdown', nextNode: 'esg_breakdown_hub_revisit' },
            { text: 'btn_continue_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'esg_breakdown_s': {
        text: 'esg_breakdown_s_text',
        type: 'ANSWER',
        buttons: [ 
            { text: 'btn_back_to_breakdown', nextNode: 'esg_breakdown_hub_revisit' },
            { text: 'btn_continue_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'esg_breakdown_g': {
        text: 'esg_breakdown_g_text',
        type: 'ANSWER',
        buttons: [ 
            { text: 'btn_back_to_breakdown', nextNode: 'esg_breakdown_hub_revisit' },
            { text: 'btn_continue_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'esg_breakdown_hub_revisit': {
        type: 'REDIRECT',
        nextNode: 'esg_breakdown_hub'
    },
    'main_loop': {
        text: "main_loop_text",
        type: 'LOOP_QUESTION',
        branches: {
            'why_important': { text: "btn_why_important", nextNode: 'why_important_answer' },
            'what_can_i_do': { text: "btn_what_can_i_do", nextNode: 'what_can_i_do_answer' },
            'how_relevant': { text: "btn_how_relevant", nextNode: 'how_relevant_answer' },
            'do_i_matter': { text: "btn_do_i_matter", nextNode: 'do_i_matter_answer' },
            'anything_else': { text: "btn_anything_else", nextNode: 'anything_else_hub' }
        },
        nextNode: 'learning_complete_prompt_quiz'
    },
    // Branch 1: Why Important
    'why_important_answer': {
        text: "why_important_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_more_on_importance", nextNode: 'more_importance_esg' } ]
    },
    'more_importance_esg': {
        text: "more_importance_esg_text",
        type: 'LOOP_QUESTION',
        parentLoop: 'main_loop',
        nextNode: 'more_importance_esg_end',
        branches: {
            'matter_as_student': { text: "btn_matter_as_student", nextNode: 'matter_as_student_answer' },
            'personal_esg': { text: "btn_personal_esg", nextNode: 'personal_esg_intro' }
        }
    },
    'matter_as_student_answer': {
        text: "matter_as_student_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_makes_sense", nextNode: 'end_secondary_branch' } ]
    },
    'personal_esg_intro': {
        text: "personal_esg_intro_text",
        type: 'ANSWER',
        buttons: [ { text: 'btn_how_insurance_is_tool', nextNode: 'personal_esg_tool_explanation' } ]
    },
    'personal_esg_tool_explanation': {
        text: 'personal_esg_tool_explanation_text',
        type: 'ANSWER',
        buttons: [ { text: "btn_how_fits_long_game", nextNode: 'personal_esg_pillars_hub' } ]
    },
    'personal_esg_pillars_hub': {
        text: "personal_esg_pillars_hub_text",
        type: 'LOOP_QUESTION',
        parentLoop: 'more_importance_esg',
        nextNode: 'end_secondary_branch',
        branches: {
            'pillar_e': { text: "btn_personal_pillar_e", nextNode: 'personal_esg_pillar_e_answer' },
            'pillar_s': { text: "btn_personal_pillar_s", nextNode: 'personal_esg_pillar_s_answer' },
            'pillar_g': { text: "btn_personal_pillar_g", nextNode: 'personal_esg_pillar_g_answer' }
        }
    },
    'personal_esg_pillar_e_answer': {
        text: "personal_esg_pillar_e_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_explore_other_pillars", nextNode: 'personal_esg_pillars_hub' }]
    },
    'personal_esg_pillar_s_answer': {
        text: "personal_esg_pillar_s_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_explore_other_pillars", nextNode: 'personal_esg_pillars_hub' }]
    },
    'personal_esg_pillar_g_answer': {
        text: "personal_esg_pillar_g_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_explore_other_pillars", nextNode: 'personal_esg_pillars_hub' }]
    },
    'more_importance_esg_end': {
        text: "all_subtopics_done_prompt",
        type: 'ANSWER',
        buttons: [ { text: "btn_back_to_main_topics", nextNode: 'end_branch' } ]
    },

    // Branch 2: What Can I Do
    'what_can_i_do_answer': {
        text: "what_can_i_do_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_what_else_you_can_do", nextNode: 'what_else_student_prompt' } ]
    },
    'what_else_student_prompt': {
        text: "what_else_student_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'what_else_response'
    },
    'what_else_response': {
        text: "", // AI will provide this text
        type: 'ANSWER',
        isDynamic: true,
        buttons: [ { text: "btn_understood", nextNode: 'end_branch' } ]
    },
    'what_else_student_failed': {
        text: "what_else_student_failed_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_understood", nextNode: 'end_branch' } ]
    },

    // Branch 3: How Relevant
    'how_relevant_answer': {
        text: "relevance_intro_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_show_me_areas", nextNode: 'relevance_hub' } ]
    },
    'relevance_hub': {
        text: 'relevance_hub_text',
        type: 'LOOP_QUESTION',
        parentLoop: 'main_loop',
        nextNode: 'career_opportunities_answer', // After loop completion
        branches: {
            'career': { text: 'btn_relevance_career', nextNode: 'relevance_career_answer' },
            'consumer': { text: 'btn_relevance_consumer', nextNode: 'relevance_consumer_answer' },
            'community': { text: 'btn_relevance_community', nextNode: 'relevance_community_answer' },
        }
    },
    'relevance_career_answer': {
        text: 'relevance_career_answer_text',
        type: 'ANSWER',
        buttons: [{ text: "btn_explore_other_relevance", nextNode: 'relevance_hub' }]
    },
    'relevance_consumer_answer': {
        text: 'relevance_consumer_answer_text',
        type: 'ANSWER',
        buttons: [{ text: "btn_explore_other_relevance", nextNode: 'relevance_hub' }]
    },
    'relevance_community_answer': {
        text: 'relevance_community_answer_text',
        type: 'ANSWER',
        buttons: [{ text: "btn_explore_other_relevance", nextNode: 'relevance_hub' }]
    },
    'career_opportunities_answer': {
        text: "career_opportunities_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_tell_me_more", nextNode: 'career_next_steps' } ]
    },
    'career_next_steps': {
        text: "career_next_steps_text",
        type: 'LOOP_QUESTION',
        parentLoop: 'main_loop', // Belongs to main flow
        nextNode: 'end_branch',
        branches: {
            'how_to_learn': { text: "btn_how_to_learn", nextNode: 'how_to_learn_answer' },
            'degree_major': { text: "btn_what_is_your_major", nextNode: 'degree_major_prompt' }
        }
    },
    'how_to_learn_answer': {
        text: "how_to_learn_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_check_out", nextNode: 'end_secondary_branch_career' } ]
    },
    'degree_major_prompt': {
        text: "degree_major_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'degree_major_response',
    },
    'degree_major_response': {
        text: "", // AI will provide this text
        isDynamic: true,
        type: 'ANSWER',
        buttons: [
            { text: "btn_thanks_clear", nextNode: 'end_secondary_branch_career' },
            { text: "btn_ask_more_major", nextNode: 'ask_more_major_prompt' },
            { text: "btn_ask_about_other_majors", nextNode: 'degree_major_prompt'}
        ]
    },
    'ask_more_major_prompt': {
        text: "ask_more_major_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'ask_more_major_response'
    },
    'ask_more_major_response': {
        text: "", // AI will provide this text
        isDynamic: true,
        type: 'ANSWER',
        buttons: [ 
            { text: 'btn_got_it_thanks', nextNode: 'end_secondary_branch_career' },
            { text: "btn_ask_more_major", nextNode: 'ask_more_major_prompt' },
            { text: "btn_ask_about_other_majors", nextNode: 'degree_major_prompt'}
        ]
    },


    // Branch 4: Do I Matter
    'do_i_matter_answer': {
        text: "do_i_matter_answer_text",
        type: 'ANSWER',
        buttons: [ { text: "btn_digital_habits", nextNode: 'digital_habits_answer' } ]
    },
    'digital_habits_answer': {
        text: "digital_habits_answer_text",
        type: 'ANSWER',
        buttons: [ 
            { text: "btn_watch_video", nextNode: 'https://www.instagram.com/reel/DMIoZCLh1zF/?utm_source=ig_web_button_share_sheet', type: 'external_link' },
            { text: "btn_empowering", nextNode: 'end_branch' } 
        ]
    },

    // Branch 5: Anything Else
    'anything_else_hub': {
        text: 'anything_else_hub_text',
        type: 'LOOP_QUESTION',
        parentLoop: 'main_loop',
        nextNode: 'anything_else_end',
        branches: {
            'not_just_environmental': { text: 'btn_not_just_environmental', nextNode: 'anything_else_not_just_environmental' },
            'measurable': { text: 'btn_measurable', nextNode: 'anything_else_measurable' },
            'career_currency': { text: 'btn_career_currency', nextNode: 'anything_else_career_currency' },
            'long_term': { text: 'btn_long_term', nextNode: 'anything_else_long_term' },
            'small_move': { text: 'btn_small_move', nextNode: 'anything_else_small_move' },
        }
    },
    'anything_else_not_just_environmental': {
        text: 'anything_else_not_just_environmental_text',
        type: 'ANSWER',
        buttons: [
            { text: 'btn_explore_more_topics', nextNode: 'anything_else_hub' },
            { text: 'btn_back_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'anything_else_measurable': {
        text: 'anything_else_measurable_text',
        type: 'ANSWER',
        buttons: [
            { text: 'btn_explore_more_topics', nextNode: 'anything_else_hub' },
            { text: 'btn_back_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'anything_else_career_currency': {
        text: 'anything_else_career_currency_text',
        type: 'ANSWER',
        buttons: [
            { text: 'btn_explore_more_topics', nextNode: 'anything_else_hub' },
            { text: 'btn_back_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'anything_else_long_term': {
        text: 'anything_else_long_term_text',
        type: 'ANSWER',
        buttons: [
            { text: 'btn_explore_more_topics', nextNode: 'anything_else_hub' },
            { text: 'btn_back_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'anything_else_small_move': {
        text: 'anything_else_small_move_text',
        type: 'ANSWER',
        buttons: [
            { text: 'btn_explore_more_topics', nextNode: 'anything_else_hub' },
            { text: 'btn_back_to_main_topics', nextNode: 'main_loop' }
        ]
    },
    'anything_else_end': {
        text: "all_subtopics_done_prompt",
        type: 'ANSWER',
        buttons: [ { text: "btn_back_to_main_topics", nextNode: 'end_branch' } ]
    },
    
    // --- REDIRECTS & ENDPOINTS ---
    'end_branch': { type: 'REDIRECT', nextNode: 'main_loop' },
    'end_secondary_branch': { type: 'REDIRECT', nextNode: 'more_importance_esg' },
    'end_secondary_branch_career': { type: 'REDIRECT', nextNode: 'career_next_steps' },
    
    // --- QUIZ SECTION ---
    'learning_complete_prompt_quiz': {
        text: "learning_complete_prompt_quiz_text",
        type: 'QUESTION',
        isDynamic: true,
        buttons: [
            { text: "btn_take_quiz", nextNode: 'quiz_q1' },
            { text: "btn_ask_more_esg", nextNode: 'ask_more_esg_prompt' },
            { text: "btn_no_quiz", nextNode: 'final_thanks_no_quiz' }
        ]
    },
    'ask_more_esg_prompt': {
        text: "ask_more_esg_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'ask_more_esg_response'
    },
    'ask_more_esg_response': {
        text: "", // AI will provide this text
        isDynamic: true,
        type: 'ANSWER',
        buttons: [ { text: "btn_back_to_quiz_prompt", nextNode: 'learning_complete_prompt_quiz' } ]
    },
    'quiz_q1': {
        text: "quiz_q1_text_dd",
        type: 'QUIZ_DRAG_DROP',
        items: [
            { id: 'item_E', textKey: 'dd_label_E' },
            { id: 'item_S', textKey: 'dd_label_S' },
            { id: 'item_G', textKey: 'dd_label_G' },
        ],
        targets: [
            { id: 'E', labelKey: 'dd_item_E', correctItemId: 'item_E' },
            { id: 'S', labelKey: 'dd_item_S', correctItemId: 'item_S' },
            { id: 'G', labelKey: 'dd_item_G', correctItemId: 'item_G' },
        ],
        nextNode: 'quiz_q1_correct',
        incorrectNextNode: 'quiz_q1_incorrect'
    } as DragDropQuizNode,
    'quiz_q1_correct': { text: "quiz_q1_correct_text", isCorrect: true, type: 'ANSWER', buttons: [ { text: "btn_next_question", nextNode: 'quiz_q2' } ] },
    'quiz_q1_incorrect': { text: "quiz_q1_incorrect_text", isCorrect: false, type: 'ANSWER', buttons: [ { text: "btn_continue", nextNode: 'determine_next_quiz_q' } ] },
    
    'quiz_q2': {
        text: "quiz_q2_text",
        type: 'QUESTION',
        buttons: [
            { text: "btn_not_esg_career_1", nextNode: 'quiz_q2_correct' },
            { text: "btn_not_esg_career_2", nextNode: 'quiz_q2_incorrect' },
            { text: "btn_not_esg_career_3", nextNode: 'quiz_q2_incorrect' }
        ]
    },
    'quiz_q2_correct': { text: "quiz_q2_correct_text", isCorrect: true, type: 'ANSWER', buttons: [ { text: "btn_next_question", nextNode: 'quiz_q3' } ] },
    'quiz_q2_incorrect': { text: "quiz_q2_incorrect_text", isCorrect: false, type: 'ANSWER', buttons: [ { text: "btn_continue", nextNode: 'determine_next_quiz_q' } ] },

    'quiz_q3': {
        text: "quiz_q3_text",
        type: 'QUESTION',
        buttons: [
            { text: "btn_digital_habit_1", nextNode: 'quiz_q3_correct' },
            { text: "btn_digital_habit_2", nextNode: 'quiz_q3_incorrect' },
            { text: "btn_digital_habit_3", nextNode: 'quiz_q3_incorrect' }
        ]
    },
    'quiz_q3_correct': { text: "quiz_q3_correct_text", isCorrect: true, type: 'ANSWER', buttons: [ { text: "btn_next_question", nextNode: 'quiz_q4' } ] },
    'quiz_q3_incorrect': { text: "quiz_q3_incorrect_text", isCorrect: false, type: 'ANSWER', buttons: [ { text: "btn_continue", nextNode: 'determine_next_quiz_q' } ] },

    'quiz_q4': {
        text: "quiz_q4_text",
        type: 'QUESTION',
        buttons: [
            { text: "btn_governance_action_1", nextNode: 'quiz_q4_incorrect' },
            { text: "btn_governance_action_2", nextNode: 'quiz_q4_correct' },
            { text: "btn_governance_action_3", nextNode: 'quiz_q4_incorrect' }
        ]
    },
    'quiz_q4_correct': { text: "quiz_q4_correct_text", isCorrect: true, type: 'ANSWER', buttons: [ { text: "btn_next_question", nextNode: 'quiz_q5' } ] },
    'quiz_q4_incorrect': { text: "quiz_q4_incorrect_text", isCorrect: false, type: 'ANSWER', buttons: [ { text: "btn_continue", nextNode: 'determine_next_quiz_q' } ] },

    'quiz_q5': {
        text: "quiz_q5_text",
        type: 'QUESTION',
        buttons: [
            { text: "btn_ripple_effect_1", nextNode: 'quiz_q5_incorrect' },
            { text: "btn_ripple_effect_2", nextNode: 'quiz_q5_correct' },
            { text: "btn_ripple_effect_3", nextNode: 'quiz_q5_incorrect' }
        ]
    },
    'quiz_q5_correct': { text: "quiz_q5_correct_text", isCorrect: true, type: 'ANSWER', buttons: [ { text: "btn_next_question", nextNode: 'quiz_q6_prompt' } ] },
    'quiz_q5_incorrect': { text: "quiz_q5_incorrect_text", isCorrect: false, type: 'ANSWER', buttons: [ { text: "btn_continue", nextNode: 'determine_next_quiz_q' } ] },

    'quiz_q6_prompt': {
        text: "quiz_q6_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'quiz_q6_response'
    },
    'quiz_q6_response': {
        text: "", // AI will provide this text
        type: 'ANSWER',
        isDynamic: true,
        buttons: [ { text: "btn_next_question", nextNode: 'quiz_q7_prompt' } ]
    },

    'quiz_q7_prompt': {
        text: "quiz_q7_prompt_text",
        type: 'PROMPT',
        isDynamic: true,
        nextNode: 'quiz_q7_response'
    },
    'quiz_q7_response': {
        text: "", // AI will provide this text
        type: 'ANSWER',
        isDynamic: true,
        buttons: [ { text: "btn_final_question", nextNode: 'quiz_q8' } ]
    },
    
    'quiz_q8': {
        text: "quiz_q8_text",
        type: 'QUIZ_WORD_SEARCH',
        gridSize: 10,
        nextNode: 'quiz_end'
    } as WordSearchQuizNode,

    'determine_next_quiz_q': { type: 'REDIRECT_QUIZ' },
    
    'quiz_end': {
        text: "quiz_end_text",
        type: 'ANSWER',
        isDynamic: true,
        buttons: [ 
            { text: "btn_claim_certificate", nextNode: '#', type: 'show_certificate' },
            { text: "btn_share_score", nextNode: 'share_prompt' },
            { text: "btn_end_curriculum", nextNode: 'end_curriculum'},
            { text: "btn_start_over", nextNode: 'start' } 
        ]
    },
    'quiz_end_revisit': {
        type: 'REDIRECT',
        nextNode: 'quiz_end'
    },
    'post_claim_options': {
        text: "certificate_sent_text",
        type: 'ANSWER',
        buttons: [
            { text: "btn_share_score", nextNode: 'share_prompt_after_claim' },
            { text: "btn_end_curriculum", nextNode: 'end_curriculum' },
            { text: "btn_start_over", nextNode: 'start' }
        ]
    },
    'post_claim_options_revisit': {
        type: 'REDIRECT',
        nextNode: 'post_claim_options'
    },
    'share_prompt': {
        text: 'share_prompt_text', // This node is a trigger for dynamic buttons
        type: 'ANSWER',
        buttons: []
    },
    'share_prompt_after_claim': {
        text: 'share_prompt_text', // This node is a trigger for dynamic buttons
        type: 'ANSWER',
        buttons: []
    },
    'final_thanks_no_quiz': { 
        text: "final_thanks_no_quiz_text",
        isDynamic: true,
        type: 'ANSWER', 
        buttons: [ 
            { text: "btn_end_curriculum", nextNode: 'end_curriculum'},
            { text: "btn_start_over", nextNode: 'start' }
        ] 
    },
    'end_curriculum': {
        text: 'end_curriculum_text',
        type: 'ANSWER',
        buttons: [ { text: "btn_start_over", nextNode: 'start' } ]
    }
};
