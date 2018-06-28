//For more information look into
//webpack.js.org
//This is required to run path.join
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//Entry Point -> Output Point

//__dirname contains the path to the project/public
//console.log(path.join(__dirname,'public'));
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public'), 
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: { 
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    }
};

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname,'public'), 
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: { 
//         contentBase: path.join(__dirname,'public'),
//         historyApiFallback: true
//     }
// };

// Pre production
// Setting devtool to 'cheap-module-eval-source-map' makes it easier to debug
// Loader
// Setting up loader for babel

//to add styles make sure to add the following:
//style-loader and css-loader


