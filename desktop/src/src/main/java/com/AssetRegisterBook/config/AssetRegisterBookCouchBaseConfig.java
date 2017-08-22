package com.AssetRegisterBook.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.couchbase.config.AbstractCouchbaseConfiguration;

import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.bucket.BucketType;
import com.couchbase.client.java.cluster.BucketSettings;
import com.couchbase.client.java.cluster.ClusterManager;
import com.couchbase.client.java.cluster.DefaultBucketSettings;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.Bucket;

@Configuration
public class AssetRegisterBookCouchBaseConfig extends AbstractCouchbaseConfiguration {


	@Value("${couchbase.cluster.bucket}")
	private String bucketName;

	@Value("${couchbase.cluster.db.password}")
	private String db_password;

	@Value("${couchbase.cluster.password}")
	private String cluster_password;

	@Value("${couchbase.cluster.username}")
	private String cluster_username;

	@Value("${couchbase.cluster.ip}")
	private String ip;


	@Override
	protected String getBucketName() {
		List<String> list_of_buckets = new ArrayList<String>();
		Cluster fetch_cluster = CouchbaseCluster.create(this.ip);
		ClusterManager clusterManager = fetch_cluster.clusterManager(this.cluster_username, this.cluster_password);
		List<BucketSettings> bucket = clusterManager.getBuckets();
		System.err.println("------------- > CouchBase opened-- > ");
		System.out.println(bucket.toString());
		for (BucketSettings bu : bucket){
			list_of_buckets.add(bu.name());
			System.out.println("List of bucket - >"+bu.name());
		}


		if(!list_of_buckets.contains(this.bucketName)){
	      BucketSettings bucketSettings = new DefaultBucketSettings.Builder()
	              .type(BucketType.COUCHBASE)
	              .name(this.bucketName)
	              .quota(220)
	              .build();
	      clusterManager.insertBucket(bucketSettings);
				Bucket buck = fetch_cluster.openBucket(bucketName);

//sample data 1
	      String statement = "INSERT INTO "+bucketName+" (KEY, VALUE) VALUES (\"admin\",{\"username\":\"admin\", \"passwd\":\"admin\",\"role\":\"ROLE_ADMIN\"});";
	        N1qlQuery query = N1qlQuery.simple(statement);
	        System.out.println("--------------"+query);
	        N1qlQueryResult result = buck.query(query);
	        System.out.println(result.errors());
	        System.out.println(result.status());

	        String statement2 = "INSERT INTO "+bucketName+" (KEY, VALUE) VALUES (\"user\",{\"username\":\"test\", \"passwd\":\"test\",\"role\":\"ROLE_USER\"});";
	        N1qlQuery query2 = N1qlQuery.simple(statement2);
	        System.out.println("--------------"+query2);
	        N1qlQueryResult result2 = buck.query(query2);
	        System.out.println(result2.errors());
	        System.out.println(result2.status());
	    }
			fetch_cluster.disconnect();
		return this.bucketName;
	}

	@Override
	protected String getBucketPassword() {
		return this.db_password;
	}

	@Override
	protected List<String> bootstrapHosts() {
		// TODO Auto-generated method stub
		//return Collections.singletonList("54.89.127.249");
		return Arrays.asList(this.ip);
	}
}