// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

//выбор игры

//question
import question from './modules/question.js';
question();

import questionStrip from './modules/questions-strip.js';
questionStrip();

import games from './modules/change-game.js';
games();
