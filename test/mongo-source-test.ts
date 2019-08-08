import { Schema } from '@orbit/data';

import MongoSource from '../src';

QUnit.module('MongoSource', function(hooks) {
  let schema: Schema;
  let source: MongoSource;

  hooks.beforeEach(async function() {
    schema = new Schema({
      models: {
        user: {
          attributes: {
            name: { type: 'string' }
          }
        }
      }
    });

    source = new MongoSource({
      schema,
      uri: 'mongodb://127.0.0.1:27017',
      namespace: 'test-database'
    });
    await source.activated;
  });

  hooks.beforeEach(async function() {
    await source.deactivate();
  });

  QUnit.test('it exists', function(assert) {
    assert.ok(source);
    assert.ok(source instanceof MongoSource);
  });
});
