/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');


//var Address = Promise.promisify(mongoose.model('Address'));
//var Address = mongoose.model('Address');
// var Job = Promise.promisify(mongoose.model('Job'));

var Address = Promise.promisifyAll(mongoose.model('Address'));
var Job = Promise.promisifyAll(mongoose.model('Job'));




var createAddress = function(line1, line2, city, state, zip) {

    return {
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        zip: zip
    }

}

var createJob = function(company, address, title, position, startDate, endDate) {
    // console.log('what is address', address);
    return {
        company: company,
        address: address,
        title: title,
        position: position,
        startDate: startDate,
        endDate: endDate
    }
}



var seedJobs = function() {

    //var markitJob = new createJob('Markit', null, null, '8/10/2010', '6/5/2015');
    var markitAddress = new Address(new createAddress('620 8th Avenue', '35th Floor', 'New York', 'NY', '10018'));
    var markitPosition1 = new createJob('Markit', markitAddress,
        'Vice President',
        'Product Manager',
        '1/1/2014',
        '6/5/2015'
    );

    var markitPosition2 = new createJob('Markit', markitAddress,
        'Assistant Vice President',
        'Project Manager / Business Analyst',
        '1/1/2012',
        '12/31/2013'
    );


    var markitPosition3 = new createJob('Markit', markitAddress,
        'Associate',
        'Product Analyst',
        '8/10/2010',
        '12/31/2011'
    );

     var markitPositions = [markitPosition1, markitPosition2, markitPosition3]
    
    var mlAddress = new Address(new createAddress('2 World Financial Center', null, 'New York', 'NY', '10281'));
    var msAddress = new Address(new createAddress('Harborside Financial Center', 'Plaza Two', 'Jersey City', 'NJ', '07331'));

    var mlJob = new createJob('Merrill Lynch', mlAddress, 'Senior Specialist', 'VBA Developer', '7/9/2007', '8/7/2010');
    var msJob = new createJob('Morgan Stanley', msAddress, 'Analyst', 'Operations Analyst', '5/15/2006', '7/3/2007');

    Job.createAsync(mlJob)
        .then(function(item) {
            return Job.findOne(item)
                .populate(['address'])
                .exec([mlAddress.save()])
        })
        .then(function(savedJob) {
            console.log('what is saved', savedJob);
        })
        .catch(function(e) {
            console.log('waht is error', e);
        })

    Job.createAsync(msJob)
        .then(function(item) {
            return Job.findOne(item)
                .populate('address')
                .exec([msAddress.save()])
        })
        .then(function(savedJob) {
            console.log('what is saved', savedJob);
        })
        .catch(function(e) {
            console.log('waht is error', e);
        })

    return Job.createAsync(markitPositions)
        .then(function(item) {
            return Job.find(item)
                .populate('address')
                .exec([markitAddress.save()])
        })
        .then(function(savedJob) {
            console.log('what is saved', savedJob);
        })
        .catch(function(e) {
            console.log('waht is error', e);
        })
    // return Address.createAsync(markitAddress)
    //     .then(function(address) {
    //         markitJob.address = address;
    //         return Position.createAsync(markitPositions)
    //     })
    //     .then(function(positions) {
    //         markitJob.position = positions;
    //         return Job.createAsync(markitJob);
    //     }).then(function(job) {
    //         return Job.findOne(job)
    //             .populate(['position', 'address'])
    //             .exec([markitJob.position, markitJob.address])
    //     })
    //     .then(function(result) {
    //         console.log('what is result', result)
    //     })
    //     .catch(function(e) {
    //         console.log('error', e);
    //     })

};

connectToDb.then(function() {
    Job.findAsync({}).then(function(jobs) {
        if (jobs.length === 0) {
            return seedJobs();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function(err) {
        console.error(err);
        process.kill(1);
    });
});


// var Social = Promise.promisifyAll(mongoose.model('Social'));

// var linkedin = {
//     name: 'LinkedIn',
//     url: 'https://www.linkedin.com/in/bryanpchu',
//     className: 'fa fa-linkedin-square',
//     image: '/asset/linkedin.jpg',
//     caption: 'connect on LinkedIn'
// }

// var Twitter = {
//     name: 'Twitter',
//     url: 'https://twitter.com/bryan_chulander',
//     className: 'fa fa-twitter-square',
//     image: '/asset/twitter.jpg',
//     caption: 'follow on Twitter'
// }

// var GitHub = {
//     name: 'GitHub',
//     url: 'https://github.com/chulander',
//     className: 'fa fa-github-alt',
//     image: 'https://avatars3.githubusercontent.com/u/4703475?v=3&s=460',
//     caption: 'view my GitHub'
// }


// var seedJobs = function(){
//     var items = [linkedin, Twitter, GitHub];
//     return Social.createAsync(items)
// }
// connectToDb.then(function() {
//     Social.findAsync({}).then(function(jobs) {
//         if (jobs.length === 0) {
//             return seedJobs();
//         } else {
//             console.log(chalk.magenta('Seems to already be user data, exiting!'));
//             process.kill(0);
//         }
//     }).then(function() {
//         console.log(chalk.green('Seed successful!'));
//         process.kill(0);
//     }).catch(function(err) {
//         console.error(err);
//         process.kill(1);
//     });
// });
