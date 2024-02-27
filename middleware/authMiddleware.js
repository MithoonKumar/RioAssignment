const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: 'failure', message: 'No token provided' });
    }

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: 'failure', message: 'Failed to authenticate token' });
        }
        req.username = decoded.username;
        if (req.body.from !== decoded.username) {
            return res.status(401).json({ status: 'failure', message: 'Unauthorized user in payload' });
        }
        next();
    });
};