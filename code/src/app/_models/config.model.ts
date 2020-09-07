export interface IAppConfig {
    api: {
        ams: string;
        kms: string;
        bla : {
            mlb: string;
        };
        msa: {
            account: string;
            license: string;
            analytics: string;
            activity: string;
            file: string;
            tag: string;
        }
    };
    web: {
        consul: string;
        micro: string;
        mysql: string;
        mongodb: string;
        redis: string;
        dgraph: string;
        minio: string;
    };
}
