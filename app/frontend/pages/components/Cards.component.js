import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

export default class PostList extends React.Component {
    state = {
        posts: [],
    };
    render() {
        return (
            <>
                {this.state.posts.map((post) => (
                    <div key={post.params.id}>{this.generatePost(post)}</div>
                ))}
            </>
        );
    }

    componentDidMount() {
        axios.defaults.baseURL = 'http://localhost:3001/admin/api/resources/posts/actions/list?direction=desc&sortBy=id';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(axios.defaults.baseURL).then((res) => {
            console.log(res);
            const posts = res.data.records;
            this.setState({ posts });
        });
    }

    generatePost(record) {
        const date = new Date(record.params.cardHeaderSub);
        return (
            <Card>
                <CardHeader title={record.params.cardHeaderTitle} subheader={date.toLocaleDateString()} />
                <CardContent>
                    <div dangerouslySetInnerHTML={{ __html: record.params.cardContent }} />
                </CardContent>
            </Card>
        );
    }
}
