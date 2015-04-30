//
//  TODO: Turn into a Common JS Module
//

var Board = React.createClass({

    propTypes: {
        count: function (props, propName) {

            if (typeof props[propName] !== "number") {
                return new Error('The count property must be a number');
            }

            if (props[propName] > 100) {
                return new Error('Creating ' + props[propName] + ' notes is ridiculous');
            }

        }
    },

    getInitialState: function () {
        return {
            notes: []
        };
    },

    componentWillMount: function () {
        var bulletinBoard = this;
        if (this.props.count) {
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" + this.props.count + "&start-with-lorem=1&callback=?", function (results) {
                results[0].split('. ').forEach(function (sentence) {
                    bulletinBoard.add(sentence.substring(0, 40));
                });
            });
        }
    },

    nextId: function () {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },

    add: function (text) {
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({notes: arr});
    },

    update: function (newText, i) {
        console.log("Updating item at index " + i + ", " + newText);
        var arr = this.state.notes;
        arr[i].note = newText;
        this.setState({notes: arr});
    },

    remove: function (i) {
        console.log("Removing item at index " + i);
        console.log(this.state.notes);
        var arr = this.state.notes;
        var n = arr.splice(i, 1);
        this.setState({notes: arr});
    },

    eachNote: function (note, i) {
        return (
            <Note key={note.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}>{note.note}</Note>
        );
    },

    render: function () {
        return (
            <div className="board">

                {this.state.notes.map(this.eachNote)}
                <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null, "New Note")} />

            </div>
        );
    }

});