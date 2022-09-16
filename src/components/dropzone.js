const DropzoneLayout = () => (
    <p>Drag a file here or click to browse</p>
);
const DragDropzoneLayout = () => (
    <p>Drop file now!</p>
);
const LoadingLayout = () => (
    <p>Please wait, loading...</p>
);
const PreviewLayout = ({file, onRemove}) => (
    <div>
        <p>Name: {file.name}</p>
        <Button onClick={onRemove}>Remove file</Button>
    </div>
);
class ImageUploader extends React.Component {
    state = {file: undefined};
 
    _handleRemove = () => this.setState({file: undefined});
 
    _handleReceiveFile = (file) => {
        this.setState({file});
 
        return new Promise((resolve, reject) => {
            // upload the file!
        })
        .catch(() => this.setState({file: undefined}))
    }
 
    render() {
        let {file} = this.state;
        let preview;
 
        if (file) {
            preview = (
                <PreviewLayout file={file} onRemove={this._handleRemove} />
            );
        }
 
        return (
            <UploaderLayoutManager
                dropzoneElement={<DropzoneLayout />}
                dragDropzoneElement={<DragDropzoneLayout />}
                loadingElement={<LoadingLayout />}
                previewElement={preview}
                showPreview={!!file}
                onReceiveFile={this._handleReceiveFile}
            />
        );
    }
};