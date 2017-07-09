import webpack from 'webpack';
import path from 'path';

const SRC = path.resolve(__dirname, 'src/index.jsx');
const DST_DIR = path.resolve(__dirname, 'dist');

export default {
    entry: SRC,
    output: {
        path: DST_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
