import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.info); //none, error, warn, info, debug

export function configure(aurelia) {
	aurelia.use
		.defaultBindingLanguage()
		.defaultResources()
		.router()
		.eventAggregator();

	aurelia.start().then(a => a.setRoot('app', document.body));
}