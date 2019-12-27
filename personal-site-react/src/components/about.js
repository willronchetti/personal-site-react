import React from 'react';
import ReactPanels from 'react-panels';

// import some ReactPanel stuff
var Panel = ReactPanels.Panel;
var Tab = ReactPanels.Tab;
var Toolbar = ReactPanels.Toolbar;
var Content = ReactPanels.Content;
var Footer = ReactPanels.Footer;

const MyPanels = {
    panels: [
        {
            title: "A Panel",
            icon: "fa fa-fire",
            toolbar: "Hello",
            content: "There",
            footer: "General"
        } 
    ]
}

/**
 * Renderer for a single ActivityPanel
 * Otherwise known as one 'tab' of the base react panel 
 */
class ActivityPanelRenderer extends React.Component {
    render(props) {
        return (
            <Tab title={props.title} icon={props.icon}>
                <Toolbar>{props.toolbar}</Toolbar>
                <Content>{props.content}</Content>
                <Footer>{props.footer}</Footer>
            </Tab>
        );
    } 
} 

/**
 * Maintains state for a single activity panel
 * Or contains the toolbar, content and footer information 
 * needed to build a single 'tab'
 */
class ActivityPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            icon: props.icon,
            toolbar: props.toolbar,
            content: props.content,
            footer: props.footer
        }
    }

    render() {
        return (
            <ActivityPanelRenderer 
                title={this.state.title} 
                icon={this.state.icon}
                toolbar={this.state.toolbar} 
                content={this.state.content} 
                footer={this.state.footer}
            />
        );
    }
}

// var MyPanel = React.createClass({
//     render: function () {
//       return (
//         <Panel theme="chemical">
//           <Tab title="One" icon="fa fa-plane">
//             <Toolbar>Toolbar content of One</Toolbar>
//             <Content>Content of One</Content>
//             <Footer>Footer content of One</Footer>
//           </Tab>
//           <Tab title="Two" icon="fa fa-fire">
//             <Content>Content of Two</Content>
//           </Tab>
//         </Panel>
//       );
//     }
//   })


class ActivityPanelCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: props.activities
        };
    }

    render() {
        var tabs = [];
        for (var i = 0; i < this.state.activities.length; i++) {
            var toProcess = this.state.activities[i];
            tabs.push(
                <ActivityPanel 
                    title={toProcess.title} 
                    icon={toProcess.icon}
                    toolbar={toProcess.toolbar} 
                    content={toProcess.content} 
                    footer={toProcess.footer}>
                </ActivityPanel>
            );
        }
        return <Panel theme="chemical">{tabs}</Panel>;
    }
}

/**
 * Render the 'About' page
 */
const About = () => {
    return <ActivityPanelCollection activities={MyPanels.panels}/>;
}

export { About };