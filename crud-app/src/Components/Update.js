import React, { useEffect, useState } from "react"

function EditList(props) {
    const [updateState, setUpdateState] = useState({
        id: '',
        name: '',
        age: ''
    });
    useEffect(() => {
        setUpdateState({
            id: props.current.id,
            name: props.current.name,
            age: props.current.age
        })
    }, [props])
    return (
        <tr>
            <td><input type="number" value={updateState.id}
                onChange={e => setUpdateState({ ...updateState, id: e.target.value })} /></td>
            <td><input type="text" value={updateState.name}
                onChange={e => setUpdateState({ ...updateState, name: e.target.value })} /></td>
            <td><input type="text" value={updateState.age}
                onChange={e => setUpdateState({ ...updateState, age: e.target.value })} /></td>
            <td><button type="submit" onClick={() => props.update(updateState)}>Update</button></td>
        </tr>
    )
}
export default EditList