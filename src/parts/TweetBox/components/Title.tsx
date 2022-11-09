type props = {
    inputEl: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Title =(props: props)=> {
    return(
        <>
        <div>
            <input
                style={styles.editor}
                value={props.inputEl}
                onChange={props.onChange}
            />
        </div>
        </>
    )
}

const styles = {
    editor: {
      margin: '0 0 0 10px',
      border: 'solid',
      width: '200px'
    }
  }

