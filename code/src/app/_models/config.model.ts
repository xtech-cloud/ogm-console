export interface IAppConfig {
    api: {
        ams: string;
        kms: string;
        bla : {
            mlb: string;
        };
        msa: {
            account: string;
            activity: string;
            analytics: string;
            approval: string;
            file: string;
            group: string;
            license: string;
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
