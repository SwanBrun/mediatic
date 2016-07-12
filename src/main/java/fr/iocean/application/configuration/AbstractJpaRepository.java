package fr.iocean.application.configuration;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;

import fr.iocean.application.resource.IoEntity;

public abstract class AbstractJpaRepository {

	@PersistenceContext
	EntityManager em;

	protected Session getSession() {
		return em.unwrap(Session.class);
	}

	public void persist(IoEntity entity) {
		em.persist(entity);
	}

	public Object update(IoEntity entity) {
		return em.merge(entity);
	}

	public void delete(IoEntity entity) {
		getSession().delete(entity);
	}

	public void save(IoEntity entity){
		em.persist(entity);
	}
}
