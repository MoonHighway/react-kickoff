//
//  TODO: Turn into a Common JS Module
//

var Note = React.createClass({

    getInitialState: function () {
        return {editing: false};
    },

    componentWillMount: function () {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(0, window.innerHeight - 150, 'px'),
            transform: 'rotate(' + this.randomBetween(-15, 15, 'deg') + ')'
        };
    },

    componentDidMount: function () {
        $(this.getDOMNode()).draggable();
    },

    componentDidUpdate: function () {
        var textArea;
        if (this.state.editing) {
            textArea = this.refs.newText.getDOMNode();
            textArea.focus();
            textArea.select();
        }
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState;
    },

    randomBetween: function (x, y, s) {
        return ((x + Math.ceil(Math.random() * y)) - 1) + s;
    },

    edit: function () {
        this.setState({editing: true});
    },

    save: function () {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
        this.setState({editing: false});
    },

    remove: function () {
        this.props.onRemove(this.props.index);
    },

    renderForm: function () {

        return (
            <div className="note" style={this.style}>

                <textarea ref="newText"
                    defaultValue={this.props.children}
                    className="form-control"></textarea>

                <button onClick={this.save}
                    className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />

            </div>
        );
    },

    renderDisplay: function () {
        return (
            <div className="note"
                style={this.style}
                onDoubleClick={this.edit}>

                <p>{this.props.children.toString()}</p>

                <span>

                    <button onClick={this.edit}
                        className="btn btn-primary btn-sm glyphicon glyphicon-pencil" />

                    <button onClick={this.remove}
                        className="btn btn-danger btn-sm glyphicon glyphicon-trash" />

                </span>

            </div>
        );
    },

    render: function () {
        return (this.state.editing) ? this.renderForm() : this.renderDisplay();
    }

});