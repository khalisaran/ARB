package com.AssetRegisterBook.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.*;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import com.wordnik.swagger.annotations.ApiResponse;
import com.wordnik.swagger.annotations.ApiResponses;


import com.AssetRegisterBook.domain.core.UserAllocationStatus;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.UserAllocationStatus_ActivityService;



/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Gepppetto system Copyright - Geppetto LLC 2014 - 2015</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

@Api(value = "/api/UserAllocationStatus_Activity", description = "UserAllocationStatus_Activity of UserAllocationStatus_Activity",produces = "application/json")
@CrossOrigin
@Controller("UserAllocationStatus_ActivityController")
@RequestMapping("/api/UserAllocationStatus_Activity")
public class UserAllocationStatus_ActivityController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(UserAllocationStatus_ActivityController.class.getName());

 


	private UserAllocationStatus_ActivityService UserAllocationStatus_Activity_service;


	public UserAllocationStatus_ActivityService get_UserAllocationStatus_Activity_service() {
		return UserAllocationStatus_Activity_service;
	}


	@Resource(name="UserAllocationStatus_ActivityService")
	public void set_UserAllocationStatus_Activity_service(UserAllocationStatus_ActivityService UserAllocationStatus_Activity_service) {
		this.UserAllocationStatus_Activity_service = UserAllocationStatus_Activity_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  UserAllocationStatus noun into database
	* @param the_UserAllocationStatus
	*@return UserAllocationStatus object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_UserAllocationStatus", httpMethod = "POST",notes = "creates a noun of UserAllocationStatus",response = UserAllocationStatus.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_UserAllocationStatus" ,headers="Accept=application/json")
    @ResponseBody
	public UserAllocationStatus create_UserAllocationStatus(@RequestBody UserAllocationStatus the_UserAllocationStatus) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_UserAllocationStatus controller started operation!");

		the_UserAllocationStatus.setId(null);

		UserAllocationStatus a_UserAllocationStatus = UserAllocationStatus_Activity_service.create_userallocationstatus(the_UserAllocationStatus);

		log.info("Object returned from create_UserAllocationStatus method !");

 

        return a_UserAllocationStatus;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  UserAllocationStatus noun into database
	*@param the_UserAllocationStatus
	*@return UserAllocationStatusobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_UserAllocationStatus", httpMethod = "PUT",notes = "updates a noun of UserAllocationStatus",response = UserAllocationStatus.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_UserAllocationStatus" ,headers="Accept=application/json")
    @ResponseBody
	public UserAllocationStatus update_UserAllocationStatus(@RequestBody UserAllocationStatus the_UserAllocationStatus) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_UserAllocationStatus controller started operation!");

		UserAllocationStatus a_UserAllocationStatus;

		a_UserAllocationStatus = UserAllocationStatus_Activity_service.update_userallocationstatus(the_UserAllocationStatus);

		log.info("Object returned from update_UserAllocationStatus method !");

 

        return a_UserAllocationStatus;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  UserAllocationStatus noun from  database based on given noun id
	*@param UserAllocationStatus_id
	*@return UserAllocationStatusobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_UserAllocationStatus/{UserAllocationStatus_id}", httpMethod = "GET",notes = "updates a noun of UserAllocationStatus",response = UserAllocationStatus.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_UserAllocationStatus/{UserAllocationStatus_id}" ,headers="Accept=application/json")
    @ResponseBody
	public UserAllocationStatus search_for_update_UserAllocationStatus(@PathVariable("UserAllocationStatus_id")String UserAllocationStatus_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_UserAllocationStatus controller started operation!");

		UserAllocationStatus the_UserAllocationStatus = new UserAllocationStatus();

		the_UserAllocationStatus = UserAllocationStatus_Activity_service.userallocationstatus_search_for_update(UserAllocationStatus_id);

		log.info("Object returned from search_for_update_UserAllocationStatus method !");

 

        return the_UserAllocationStatus;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  UserAllocationStatus noun from  database based on given noun id
	*@param UserAllocationStatus_id
	*@return UserAllocationStatusobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_UserAllocationStatus/{UserAllocationStatus_id}", httpMethod = "DELETE",notes = "deletes a noun of UserAllocationStatus",response = UserAllocationStatus.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_UserAllocationStatus/{UserAllocationStatus_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_UserAllocationStatus(@PathVariable("UserAllocationStatus_id")String  UserAllocationStatus_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_UserAllocationStatus controller started operation!");

		String service_return_msg = "";

		service_return_msg = UserAllocationStatus_Activity_service.delete_userallocationstatus(UserAllocationStatus_id);

		log.info("Object returned from delete_UserAllocationStatus method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  UserAllocationStatus noun from  database
	*
	*@return List of UserAllocationStatus objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_UserAllocationStatus", httpMethod = "GET",notes = "special search that gets all values of UserAllocationStatus",response = UserAllocationStatus.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_UserAllocationStatus" ,headers="Accept=application/json")
    @ResponseBody
	public List<UserAllocationStatus> get_all_UserAllocationStatus() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_UserAllocationStatus controller started operation!");

		List<UserAllocationStatus> UserAllocationStatus_list = new ArrayList<UserAllocationStatus>();

		UserAllocationStatus_list = UserAllocationStatus_Activity_service.get_all_userallocationstatus();

		log.info("Object returned from get_all_UserAllocationStatus method !");

 

        return UserAllocationStatus_list;

	}




}