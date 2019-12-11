import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class PureComp extends PureComponent {
    static propTypes = {

    }

    render() {
        console.log('Pure Component')
        return (
            <div>
                PureComponent ... {this.props.name}
            </div>
        )
    }
}

export default PureComp
