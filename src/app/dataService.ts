// export class DataService  {


//   private addSampleOnInit: boolean = true;

//   private _listings: Array<app.domain.KeywordListingMap>;
//   //private localStorageService: LocalStorageService;

//   static $inject = ['$http', '$q', 'localStorageService','constantService','sampleService'];
//   constructor(
//       $http: ng.IHttpService,
//       $q: ng.IQService,
//       private localStorageService: LocalStorageService,
//       private constantService: ConstantService,
//       private sampleService: SampleService) {
//       this.httpService = $http;
//       this.qService = $q;

//   }

//   getAll(): app.domain.KeywordListingMap[] {
//       var self = this;
//       return this.listings();
//   }

//   addSamples(): app.domain.KeywordListingMap[] {
//       var all = this.getAll();
//       var samples = this.sampleService.getAllSamples();
//       var all = _.union(all, samples);

//       for (var i of all) {
//           var key = i.NickName;
//           var existingListing = this.getSingle(key);
//           if (existingListing == null) {
//               this.add(i);
//           } else {
//               this.update(key,i);
//           }
//       }

//       return all;
//   }

//   getSingle(resource: string): app.domain.KeywordListingMap {
//       var self = this;


//       var value = _.findWhere(this.listings(), { NickName: resource })
//       return value;

//   }

//   add( entity: app.domain.KeywordListingMap): void {
//       var self = this;
//       var existingListing = this.getSingle(entity.NickName);
//       if (existingListing != null) {
//           throw "cannot add - already exists";
//       }
//       this.listings().push(entity);
//       this.localStorageService.writeObject(this.constantService.localStorageKey_Listings, this._listings);
//   }

//   clearAll(): void {
//       var self = this;
//       this.localStorageService.writeObject(this.constantService.localStorageKey_Listings, null);
//   }

//   update(resource: string, entity: app.domain.KeywordListingMap):void {
//       var self = this;
//       var existingListing = this.getSingle(resource);
//       if (existingListing == null) {
//           throw "cannot update - does not exist";
//       }
//       this.remove(resource);
//       this.add(entity);
//   }



//   remove(resource: string): void {
//       var self = this;
//       var existingListing = this.getSingle(resource);
//       if (existingListing == null) {
//           return null;
//       }
//       this._listings = _.without(this.listings(), existingListing)
//       this.localStorageService.writeObject(this.constantService.localStorageKey_Listings, this._listings);
//   }

//   copy(resource: string): void {
//       var self = this;
//       var existingListing = this.getSingle(resource);
//       if (existingListing == null) {
//           return null;
//       }
//       var newListing = JSON.parse(JSON.stringify(existingListing))
//       var originalNickname = newListing.NickName.trim();
//       for (var copyIndex = 0; copyIndex < 5; copyIndex++) {
//           var suffix = "_copy";
//           var numberSuffix = "";
//           if (copyIndex > 0) {
//               numberSuffix = (copyIndex + 1).toString();
//           }


//           newListing.NickName = originalNickname + suffix + numberSuffix;
//           try {
//               this.add(newListing);
//               break;
//           }
//           catch (ex) {
//               continue;
//           }
//       }

//   }

//   private listings(): app.domain.KeywordListingMap[] {
//       if (this._listings == null) {

// tslint:disable-next-line:max-line-length
//           this._listings = this.localStorageService.readObject<app.domain.KeywordListingMap[]>(this.constantService.localStorageKey_Listings);
//           if (this._listings == null) {

//               this._listings = new Array<app.domain.KeywordListingMap>();
//               if (this.addSampleOnInit) {
//                   this.addSamples();
//               }
//           }
//       }
//       this._listings = _.compact(this._listings);
//       return this._listings;
//   }
// }
