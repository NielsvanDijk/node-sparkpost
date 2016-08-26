'use strict';

var key = 'YOURAPIKEY'
  , SparkPost = require('sparkpost')
  , client = new SparkPost(key)
  , options = {
    options: {
      open_tracking: true,
      click_tracking: true
    },
    campaign_id: 'christmas_campaign',
    metadata: {
      user_type: 'students'
    },
    substitution_data: {
      sender: 'Big Store Team'
    },
    recipients: [
      {
        address: {
          email: 'wilma@flintstone.com',
          name: 'Wilma Flintstone'
        },
        tags: [
          'greeting',
          'prehistoric',
          'fred',
          'flintstone'
        ],
        metadata: {
          place: 'Bedrock'
        },
        substitution_data: {
          customer_type: 'Platinum'
        }
      }
    ],
    content: {
      from: {
        name: 'Fred Flintstone',
        email: 'fred@flintstone.com'
      },
      subject: 'Big Christmas savings!',
      reply_to: 'Christmas Sales <sales@flintstone.com>',
      headers: {
        'X-Customer-Campaign-ID': 'christmas_campaign'
      },
      text: 'Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n Hurry, this offer is only to {{customer_type}}\n {{sender}}',
      html: '<p>Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n</p><p>Hurry, this offer is only to {{customer_type}}\n</p><p>{{sender}}</p>'
    }
  };

client.transmissions.send(options)
  .then(data => {
    console.log(data);
    console.log('Congrats you can use our client library!');
  })
  .catch(err => {
    console.log(err);
  });

// Using a callback
client.transmissions.send(options, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log('Congrats you can use our client library!');
  }
});
