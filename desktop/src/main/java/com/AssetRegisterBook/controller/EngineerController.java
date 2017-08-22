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


import com.AssetRegisterBook.domain.core.Engineer;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.EngineerService;



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

@Api(value = "/api/Engineer", description = "Engineer of Engineer",produces = "application/json")
@CrossOrigin
@Controller("EngineerController")
@RequestMapping("/api/Engineer")
public class EngineerController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(EngineerController.class.getName());

 


	private EngineerService Engineer_service;


	public EngineerService get_Engineer_service() {
		return Engineer_service;
	}


	@Resource(name="EngineerService")
	public void set_Engineer_service(EngineerService Engineer_service) {
		this.Engineer_service = Engineer_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  Engineer noun into database
	* @param the_Engineer
	*@return Engineer object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_Engineer", httpMethod = "POST",notes = "creates a noun of Engineer",response = Engineer.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_Engineer" ,headers="Accept=application/json")
    @ResponseBody
	public Engineer create_Engineer(@RequestBody Engineer the_Engineer) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_Engineer controller started operation!");

		the_Engineer.setId(null);

		Engineer a_Engineer = Engineer_service.create_engineer(the_Engineer);

		log.info("Object returned from create_Engineer method !");

 

        return a_Engineer;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  Engineer noun into database
	*@param the_Engineer
	*@return Engineerobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_Engineer", httpMethod = "PUT",notes = "updates a noun of Engineer",response = Engineer.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_Engineer" ,headers="Accept=application/json")
    @ResponseBody
	public Engineer update_Engineer(@RequestBody Engineer the_Engineer) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_Engineer controller started operation!");

		Engineer a_Engineer;

		a_Engineer = Engineer_service.update_engineer(the_Engineer);

		log.info("Object returned from update_Engineer method !");

 

        return a_Engineer;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  Engineer noun from  database based on given noun id
	*@param Engineer_id
	*@return Engineerobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_Engineer/{Engineer_id}", httpMethod = "GET",notes = "updates a noun of Engineer",response = Engineer.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_Engineer/{Engineer_id}" ,headers="Accept=application/json")
    @ResponseBody
	public Engineer search_for_update_Engineer(@PathVariable("Engineer_id")String Engineer_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_Engineer controller started operation!");

		Engineer the_Engineer = new Engineer();

		the_Engineer = Engineer_service.engineer_search_for_update(Engineer_id);

		log.info("Object returned from search_for_update_Engineer method !");

 

        return the_Engineer;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  Engineer noun from  database based on given noun id
	*@param Engineer_id
	*@return Engineerobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_Engineer/{Engineer_id}", httpMethod = "DELETE",notes = "deletes a noun of Engineer",response = Engineer.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_Engineer/{Engineer_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_Engineer(@PathVariable("Engineer_id")String  Engineer_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_Engineer controller started operation!");

		String service_return_msg = "";

		service_return_msg = Engineer_service.delete_engineer(Engineer_id);

		log.info("Object returned from delete_Engineer method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  Engineer noun from  database
	*
	*@return List of Engineer objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_Engineer", httpMethod = "GET",notes = "special search that gets all values of Engineer",response = Engineer.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_Engineer" ,headers="Accept=application/json")
    @ResponseBody
	public List<Engineer> get_all_Engineer() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_Engineer controller started operation!");

		List<Engineer> Engineer_list = new ArrayList<Engineer>();

		Engineer_list = Engineer_service.get_all_engineer();

		log.info("Object returned from get_all_Engineer method !");

 

        return Engineer_list;

	}




}