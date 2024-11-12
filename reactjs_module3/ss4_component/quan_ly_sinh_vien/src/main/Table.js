import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

class DisplayTable extends React.Component{
    render() {
        return (
            <>
            <table class={'table'}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map((e,i) => (
                        <tr key={e.id}>
                            <th>{e.id}</th>
                            <th>{e.name}</th>
                            <th>{e.age}</th>
                            <th>{e.add}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
}
export default DisplayTable;