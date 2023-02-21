const Service = require('node-linux').Service;

// Create a new service object
const svc = new Service({
    name: 'KinesisHouse',
    description: 'KinesisHouse web server.',
    script: '/srv/KinesisHouse/bin/www',
    env: [{
        name: "PORT",
        value: 443
    }],
    // Add SSL configuration options
    openssl: {
        key: '/path/to/private/key.pem',
        cert: '/path/to/certificate.pem',
        ca: '/path/to/ca-bundle.pem'
    }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
    svc.start();
});

svc.install();
