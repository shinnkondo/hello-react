import React, { PureComponent } from "react";

interface Props {
    numEx: number
}

export default class HelloWorld extends PureComponent<Props> {
    render() {
        return (
            <div>
                <h2>
                Hello World{'!'.repeat(this.props.numEx)}
                </h2>
            </div>
        )
    }
}