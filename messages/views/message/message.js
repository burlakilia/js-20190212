import { View } from "../view";
import template from './message.pug';
import { MessageInfo } from "../../blocks/message-info/message-info";
import { MessageContent } from "../../blocks/message-content/message-content";

export class Message extends View {
    get bemName () {
        return 'message';
    }
    template (data) {
        return template(data);
    }
    constructor (options) {
        super(options);
        this.messageInfo = new MessageInfo({
            title: options.title || '',
            emailFrom: options.emailFrom || '',
            emailTo: options.emailTo || '',
            time: options.time || ''
        });
        this.messageContent = new MessageContent({
            text: options.text || ''
        });
    }
    render (el) {
        if (!el) return;

        super.render(el);
        this.messageInfo.render(this.getElement('wrapper'));
        this.messageContent.render(this.messageInfo.content);
    }
}
