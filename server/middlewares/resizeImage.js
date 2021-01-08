import Path from "path";
import mime from "mime-types";
import sharp from "sharp";

export function resizingMiddleware(req, res, next)  {
    const __dirname = Path.resolve()
    const data = parseResizingURI(req.baseUrl); // Extract data from the URI

    if (!data) { return next(); } // Could not parse the URI
    // Get full file path in public directory
    const path = Path.join(__dirname, 'public/uploads', data.path);

    resizeImage(path, data.width, data.height)
        .then(buffer => {
            // Success. Send the image
            res.set('Content-type', mime.lookup(path)); // using 'mime-types' package
            res.send(buffer);
        })
        .catch(next); // File not found or resizing failed
}

function resizeImage(path, width, height) {
    return sharp(path).resize({
        width,
        height,
        // Preserve aspect ratio, while ensuring dimensions are <= to those specified
        fit: sharp.fit.inside,
    }).toBuffer();
}

function limitNumberToRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function parseResizingURI(uri) {
    // Attempt to extract some variables using Regex
    const matches = uri.match(
        /(?<path>.*\/)(?<name>[^\/]+)_(?<width>\d+)x(?<height>\d+)(?<extension>\.[a-z\d]+)$/i
    );

    if (matches) {
        const { name, width, height, extension } = matches.groups;
        return {
            path: '/' + name + extension, // Original file path
            width: limitNumberToRange(+width, 16, 2000),   // Ensure the size is in a range
            height: limitNumberToRange(+height, 16, 2000), // so people don't try 999999999
            extension: extension
        };
    }
    return false;
}
