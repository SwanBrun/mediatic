package fr.iocean.application.resource.media;

import java.util.List;

import org.springframework.data.domain.Pageable;

public interface MediaRepositoryCustom {

	
	public List<Media>search( String search);
		
}
