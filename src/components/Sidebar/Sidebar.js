import React from 'react';


class Sidebar extends React.Component {
    render() {
        let sidebarClass = `sidebar ${this.props.className} ${this.props.isRight ? 'sidebar--right' : ''}`
        return (
            <div className={sidebarClass}>
                <div className="sidebar__header">
                    <span className="sidebar__header-title">{this.props.title}</span>
                    <a href="/" className="sidebar__header-close-btn">
                        <span className="iconify" data-icon="ei:close" data-inline="false"></span>
                    </a>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Sidebar;