const Editor = (props) => {
  return (
    <textarea
      
      id="editor"
      value={props.text}
      typeof="text"
      onChange={props.onChange}
    />
  );
};

export default Editor;
