
class ParsleyVisualLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = this.props.styles || {};

        return (
            <div>
                <VisualLayout></VisualLayout>
                <ContentBank></ContentBank>
            </div>
        );
    }
}




