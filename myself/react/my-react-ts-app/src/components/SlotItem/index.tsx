import React from 'react'
interface Props {
    children: React.ReactNode;
    slot?: string
}
function index(props: Props) {
    const { children, slot } = props
    let domFragment: any[] = []
    React.Children.map(children, (fragment: any) => {
        if (fragment.props.slot === slot) {
            domFragment.push(fragment)
        }
    })
    if (props.children) {
        // let filterItem = props.children[0]
        return <div>{domFragment}</div>

    } else {
        return <div>{ children }</div>
    }

}

export default index