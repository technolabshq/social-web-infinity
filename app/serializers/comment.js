import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
     attrs: {
        "user_id": { embedded: 'always' }
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
       // payload = {posts:payload};
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});